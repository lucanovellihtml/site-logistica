// Check if it's a touch device
const isTouchDevice = 'ontouchstart' in window;

// Function for Mouse Move Scale Change (Jelly Effect)
function getScale(diffX, diffY) {
    const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
    return Math.min(distance / 100, 0.25);
}

// Function For Mouse Movement Angle in Degrees (Jelly Effect)
function getAngle(diffX, diffY) {
    return (Math.atan2(diffY, diffX) * 180) / Math.PI;
}

// Variables
const elasticCursor = document.getElementById("cursor-custom");
const pos = { x: 0, y: 0 };
const vel = { x: 0, y: 0 };
let targetPos = { x: 0, y: 0 };
let isHoveringClickable = false;

// Use gsap.quickSetter for optimized property setting
const setX = gsap.quickSetter(elasticCursor, "x", "px");
const setY = gsap.quickSetter(elasticCursor, "y", "px");
const setRotation = gsap.quickSetter(elasticCursor, "rotate", "deg");
const setScaleX = gsap.quickSetter(elasticCursor, "scaleX");
const setScaleY = gsap.quickSetter(elasticCursor, "scaleY");
const setOpacity = gsap.quickSetter(elasticCursor, "opacity");

// Update position and rotation (without affecting the scale)
function update() {
    const rotation = getAngle(vel.x, vel.y);
    const scale = getScale(vel.x, vel.y);

    // Apply jelly-like effect (position and rotation), keeping scale separate
    setX(pos.x);
    setY(pos.y);
    setRotation(rotation);

    // If not hovering, apply the jelly scale effect
    if (!isHoveringClickable) {
        setScaleX(1 + scale);
        setScaleY(1 - scale);
    }
}

// Animation loop
function animate() {
    const speed = 0.35;

    // Update cursor's position based on targetPos
    pos.x += (targetPos.x - pos.x) * speed;
    pos.y += (targetPos.y - pos.y) * speed;
    vel.x = targetPos.x - pos.x;
    vel.y = targetPos.y - pos.y;

    update();
    requestAnimationFrame(animate);
}

// Handle mouse move event
window.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    targetPos.x = clientX;
    targetPos.y = clientY;

    // Always update position, regardless of hover state
    update();
});

// Function to handle scaling when hovering over clickable elements
function handleCursorHover(isHovering) {
    isHoveringClickable = isHovering; // Set hover state

    // Smoothly apply scaling effect on hover, but don't stop position updating
    gsap.to(elasticCursor, {
        scale: isHovering ? 0.5 : 1, // Adjust this scale for clickable effect
        duration: 0.3,
        ease: 'power2.out',
    });
}

// Add event listeners for clickable elements (links and buttons)
document.querySelectorAll('a, button').forEach((element) => {
    // Scale down cursor on mouse enter
    element.addEventListener('mouseenter', () => handleCursorHover(true));

    // Reset cursor size on mouse leave
    element.addEventListener('mouseleave', () => handleCursorHover(false));
});

// Function to hide the cursor
function hideCursor() {
    gsap.to(elasticCursor, {
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
    });
}

// Function to show the cursor
function showCursor() {
    gsap.to(elasticCursor, {
        opacity: 1,
        duration: 0.7,
        ease: 'power2.out',
    });
}

// Hiding the cursor when it leaves the viewport
document.addEventListener('mouseleave', hideCursor);

// Re-show the cursor when mouse re-enters the viewport
document.addEventListener('mouseenter', showCursor);

// Detect when entering and exiting an iframe
const iframes = document.querySelectorAll('iframe');

iframes.forEach((iframe) => {
    // Add event listener to hide cursor when entering the iframe
    iframe.addEventListener('mouseenter', hideCursor);

    // Add event listener to show cursor when leaving the iframe
    iframe.addEventListener('mouseleave', showCursor);
});

// Only invoke the animation if it's not a touch device
if (!isTouchDevice) {
    animate();
}