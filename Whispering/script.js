// Show the selected page and hide others
function showPage(pageId) {
    const pages = document.querySelectorAll('.container');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.style.display = 'block'; // 显示目标页面
    }
}

// Add event listeners to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('href').substring(1);
        showPage(pageId);
    });
});

// Show the home page by default
showPage('home');

// Add event listener to the header title to navigate to the home page
document.getElementById('homeLink').addEventListener('click', () => {
    window.location.href = 'index.html'; // 直接跳转到主页
});

// Scroll Animation for Story Boxes
// Scroll Animation for Story Boxes and Square Box
const storyBoxes = document.querySelectorAll('.story, .square-box');

function checkScroll() {
    storyBoxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const boxBottom = box.getBoundingClientRect().bottom;

        // If the box is in the viewport
        if (boxTop < window.innerHeight && boxBottom > 0) {
            box.classList.add('visible');
        } else {
            box.classList.remove('visible');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', checkScroll);

// Trigger checkScroll on page load
checkScroll();

// Custom Cursor Logic
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
});

// Search Functionality
function searchStories() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const stories = document.querySelectorAll('.story');

    stories.forEach(story => {
        const title = story.querySelector('h2').textContent.toLowerCase();
        const content = story.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchTerm) || content.includes(searchTerm)) {
            story.style.display = 'block';
        } else {
            story.style.display = 'none';
        }
    });
}
function checkScroll() {
    console.log('Scroll event triggered'); // 调试信息
    storyBoxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const boxBottom = box.getBoundingClientRect().bottom;

        // If the box is in the viewport
        if (boxTop < window.innerHeight && boxBottom > 0) {
            box.classList.add('visible');
        } else {
            box.classList.remove('visible');
        }
    });
}