export class SnakeCursor {
    constructor(options = {}) {
        this.options = {
            length: 40, // More segments for smoother curve
            lineWidthHead: 12,
            lineWidthTail: 2,
            color: '#4ade80', // Green-400
            damping: 0.25, // For spring motion
            stiffness: 0.5,
            constraintDist: 4, // Distance between points
            maxSpeed: 15, // Max pixels per frame for head
            ...options
        };

        this.points = [];
        this.mouseX = window.innerWidth / 2;
        this.mouseY = window.innerHeight / 2;

        // Canvas setup
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.init();
    }

    init() {
        this.initCanvas();
        this.initPoints();
        this.bindEvents();
        this.animate();
    }

    initCanvas() {
        Object.assign(this.canvas.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: '9998' // Below some UI potentially
        });
        document.body.appendChild(this.canvas);
        this.resize();
    }

    initPoints() {
        for (let i = 0; i < this.options.length; i++) {
            this.points.push({
                x: this.mouseX,
                y: this.mouseY
            });
        }
    }

    bindEvents() {
        document.addEventListener('mousemove', (e) => {
            this.targetX = e.clientX; // Helper target
            this.targetY = e.clientY;
        });

        // Initialize target to current mouse (or center)
        this.targetX = this.mouseX;
        this.targetY = this.mouseY;

        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    animate = () => {
        this.update();
        this.draw();
        this.animationId = requestAnimationFrame(this.animate);
    }

    update() {
        // 1. Move Head towards Target with Max Speed
        const head = this.points[0];
        const dx = this.targetX - head.x;
        const dy = this.targetY - head.y;
        const dist = Math.hypot(dx, dy);

        if (dist > 0.1) {
            // Calculate speed limit
            const speed = Math.min(dist * 0.2, this.options.maxSpeed); // Easing with cap
            const angle = Math.atan2(dy, dx);

            head.x += Math.cos(angle) * speed;
            head.y += Math.sin(angle) * speed;
        }

        // 2. Resolve Body (Constraint / Drag)
        // Each point moves towards the previous one to maintain distance
        for (let i = 1; i < this.points.length; i++) {
            const prev = this.points[i - 1];
            const curr = this.points[i];

            const dx = prev.x - curr.x;
            const dy = prev.y - curr.y;
            const dist = Math.hypot(dx, dy);
            const targetDist = this.options.constraintDist;

            // Simple drag: if too far, pull closer
            if (dist > targetDist) {
                const ratio = (dist - targetDist) / dist;
                const moveX = dx * ratio;
                const moveY = dy * ratio;

                // Move current towards previous
                curr.x += moveX * 0.5; // Stiff drag
                curr.y += moveY * 0.5;
            } else {
                // Optional: Smooth catchup if closer (springy)
                curr.x += dx * 0.1;
                curr.y += dy * 0.1;

            }
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw curve through points
        if (this.points.length < 2) return;

        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        this.ctx.strokeStyle = this.options.color;

        // Draw segments with varying width
        // To do variable width smoothly, we might need to fill shapes or draw multiple lines?
        // Simple approach: One path? No, path has constant width.
        // Better: Draw small circles or lines segment by segment for tapering.
        // OR: Fill a shape.

        // Let's try drawing circles at each point, size interpolated
        /*
        for (let i = 0; i < this.points.length; i++) {
            const p = this.points[i];
            const progress = i / (this.points.length - 1);
            const size = this.options.lineWidthHead - ((this.options.lineWidthHead - this.options.lineWidthTail) * progress);
            
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, size / 2, 0, Math.PI * 2);
            this.ctx.fillStyle = this.options.color;
            this.ctx.fill();
        }
        */

        // Even better: Connect points with a filled strip (Ribbon)
        // Or keep it simple: Stroke path for core, circles for bulk?
        // Let's stick to the request: "one continuous thing".
        // A simple thick line that tapers is hard with basic stroke.
        // We will loop and draw short line segments, changing lineWidth.

        this.ctx.beginPath();

        // Move to first point
        // Use Quadratic curves for smoothness
        /*
        this.ctx.moveTo(this.points[0].x, this.points[0].y);
        for (let i = 1; i < this.points.length - 1; i++) {
            const xc = (this.points[i].x + this.points[i + 1].x) / 2;
            const yc = (this.points[i].y + this.points[i + 1].y) / 2;
            this.ctx.quadraticCurveTo(this.points[i].x, this.points[i].y, xc, yc);
        }
        this.ctx.stroke();
        */

        // Tapered line approach
        for (let i = 0; i < this.points.length - 1; i++) {
            const p1 = this.points[i];
            const p2 = this.points[i + 1];

            const progress = i / (this.points.length - 1);
            const size = this.options.lineWidthHead - ((this.options.lineWidthHead - this.options.lineWidthTail) * progress);

            this.ctx.lineWidth = size;
            this.ctx.beginPath();
            this.ctx.moveTo(p1.x, p1.y);
            this.ctx.lineTo(p2.x, p2.y);
            this.ctx.stroke();

            // Circle caps to smooth joints
            this.ctx.beginPath();
            this.ctx.arc(p1.x, p1.y, size / 2, 0, Math.PI * 2);
            this.ctx.fillStyle = this.options.color;
            this.ctx.fill();
        }
        // Last cap
        const last = this.points[this.points.length - 1];
        this.ctx.beginPath();
        this.ctx.arc(last.x, last.y, this.options.lineWidthTail / 2, 0, Math.PI * 2);
        this.ctx.fill();
    }

    destroy() {
        cancelAnimationFrame(this.animationId);
        this.canvas.remove();
    }
}

// Auto-initialize
new SnakeCursor();
