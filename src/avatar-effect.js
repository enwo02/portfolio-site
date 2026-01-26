/**
 * Avatar Look-at-Mouse Effect (Image Swap Version)
 * 
 * Tracks mouse movement and swaps the avatar image to face the cursor.
 */

export const initAvatarEffect = () => {
    const avatar = document.querySelector('.hero-avatar');
    const avatarWrapper = document.querySelector('.hero-avatar-wrapper');

    if (!avatar || !avatarWrapper) return;

    // Configuration
    const deadzoneRadius = 100; // Distance in pixels from center where face remains "center"
    const baseUrl = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
    const basePath = `${baseUrl}assets/avatar-states/`;

    // Map directions to filenames
    const states = {
        center: 'center.png',
        up: 'up.png',
        down: 'down.png',
        left: 'left.png',
        right: 'right.png',
        'up-left': 'up-left.png',
        'up-right': 'up-right.png',
        'down-left': 'down-left.png',
        'down-right': 'down-right.png'
    };

    // Preload images
    const preloadedImages = {};
    Object.keys(states).forEach(key => {
        const img = new Image();
        img.src = `${basePath}${states[key]}`;
        preloadedImages[key] = img;
    });

    let currentDirection = 'center';

    const handleMouseMove = (e) => {
        // Get avatar center position
        const rect = avatarWrapper.getBoundingClientRect();
        const avatarCenterX = rect.left + rect.width / 2;
        const avatarCenterY = rect.top + rect.height / 2;

        const deltaX = e.clientX - avatarCenterX;
        const deltaY = e.clientY - avatarCenterY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        let newDirection = 'center';

        // Only calculate direction if outside deadzone
        if (distance > deadzoneRadius) {
            // Calculate angle in degrees (0 is Right, -90 is Up, 90 is Down, 180 is Left)
            // atan2 returns radians between -PI and PI
            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

            // Determine octant
            // Sectors are 45 degrees wide (360 / 8)
            // Shift angle by 22.5 to align sectors

            // Normalize angle to 0-360 for easier logic
            const normalizedAngle = (angle + 360) % 360;

            if (normalizedAngle >= 337.5 || normalizedAngle < 22.5) {
                newDirection = 'right';
            } else if (normalizedAngle >= 22.5 && normalizedAngle < 67.5) {
                newDirection = 'down-right';
            } else if (normalizedAngle >= 67.5 && normalizedAngle < 112.5) {
                newDirection = 'down';
            } else if (normalizedAngle >= 112.5 && normalizedAngle < 157.5) {
                newDirection = 'down-left';
            } else if (normalizedAngle >= 157.5 && normalizedAngle < 202.5) {
                newDirection = 'left';
            } else if (normalizedAngle >= 202.5 && normalizedAngle < 247.5) {
                newDirection = 'up-left';
            } else if (normalizedAngle >= 247.5 && normalizedAngle < 292.5) {
                newDirection = 'up';
            } else if (normalizedAngle >= 292.5 && normalizedAngle < 337.5) {
                newDirection = 'up-right';
            }
        }

        // Only update DOM if changed
        if (newDirection !== currentDirection) {
            currentDirection = newDirection;
            avatar.src = `${basePath}${states[newDirection]}`;
        }
    };

    const handleMouseLeave = () => {
        // Reset to center when mouse leaves window
        if (currentDirection !== 'center') {
            currentDirection = 'center';
            avatar.src = `${basePath}${states.center}`;
        }
    };

    // Attach listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Initial set
    // avatar.src = `${basePath}${states.center}`; // Optional, index.html has default

    return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
    };
};
