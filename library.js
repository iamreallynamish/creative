adjustAppWidths()
function adjustAppWidths() {
    const parents = document.querySelectorAll(
        '.active3Up, .active2Up, .active, .active2Down, .active3Down'
    );
    parents.forEach(parent => {
        const apps = parent.querySelectorAll('.app');
        const count = apps.length;

        if (count === 3) {
            const referenceWidth = apps[1].offsetWidth;
            apps[0].style.width = (referenceWidth * 0.85) + 'px';
            apps[0].style.height = (referenceWidth * 0.85) + 'px';
            apps[2].style.width = (referenceWidth * 0.85) + 'px';
            apps[2].style.height = (referenceWidth * 0.85) + 'px';
        }

        if (count === 4) {
            const referenceWidth = apps[1].offsetWidth;
            if (parent.classList.contains("active3Up") || parent.classList.contains("active3Down")) {
                apps[0].style.width = (referenceWidth * 0.5) + 'px';
                apps[0].style.height = (referenceWidth * 0.5) + 'px';
                apps[3].style.width = (referenceWidth * 0.5) + 'px';
                apps[3].style.height = (referenceWidth * 0.5) + 'px';
                parent.style.padding = "0 2vw";
            } else {
                apps[0].style.width = (referenceWidth * 0.85) + 'px';
                apps[0].style.height = (referenceWidth * 0.85) + 'px';
                apps[3].style.width = (referenceWidth * 0.85) + 'px';
                apps[3].style.height = (referenceWidth * 0.85) + 'px';
            }
        }
    });
}
const appleWatch = document.getElementById('appleWatch');
let scrollCooldown = false;
appleWatch.addEventListener('wheel', function (e) {
    e.preventDefault();
    console.log('Scroll value:', e.deltaY);

    const active3Up = document.querySelector('.active3Up')
    const active2Up = document.querySelector('.active2Up')
    const active = document.querySelector('.active')
    const active2Down = document.querySelector('.active2Down')
    const active3Down = document.querySelector('.active3Down')
    if (!scrollCooldown && e.deltaY > 50 && (document.querySelector('.notactiveDown'))) {
        const notactiveDown = document.querySelector('.notactiveDown')
        scrollCooldown = true;
        active3Up.classList.replace('active3Up', 'notactiveUp');
        active2Up.classList.replace('active2Up', 'active3Up');
        active.classList.replace('active', 'active2Up');
        active.classList.remove('fourActive');
        active2Down.classList.replace('active2Down', 'active');
        active3Down.classList.replace('active3Down', 'active2Down');
        notactiveDown.classList.replace('notactiveDown', 'active3Down');

        active3Down.style.padding = "0 0.5vw"

        const activeApps = active2Down.querySelectorAll('.app');
        console.log(activeApps)
        if (activeApps.length == 4) {
            active2Down.classList.add("fourActive")
        }
        adjustAppWidths();


        setTimeout(() => {
            scrollCooldown = false;
        }, 150);
    } else if (!scrollCooldown && e.deltaY < -50 && (document.querySelector('.notactiveUp'))) {
        const notactiveUp = document.querySelector('.notactiveUp')
        scrollCooldown = true;
        notactiveUp.classList.replace('notactiveUp', 'active3Up');
        active3Up.classList.replace('active3Up', 'active2Up');
        active2Up.classList.replace('active2Up', 'active');
        active.classList.replace('active', 'active2Down');
        active.classList.remove('fourActive');
        active2Down.classList.replace('active2Down', 'active3Down');
        active3Down.classList.replace('active3Down', 'notactiveDown');

        active3Up.style.padding = "0 0.5vw"

        const activeApps = active2Down.querySelectorAll('.app');
        console.log(activeApps)
        if (activeApps.length == 4) {
            active2Down.classList.add("fourActive")
        }
        adjustAppWidths();


        setTimeout(() => {
            scrollCooldown = false;
        }, 150);
    }

}, { passive: false });

document.querySelectorAll('.app').forEach(appDiv => {
    appDiv.addEventListener('click', () => {
        const imgSrc = appDiv.querySelector('img').getAttribute('src');

        document.getElementById('imageChange').src = imgSrc;
        document.getElementById('imageChange2').style.backgroundImage = `url(${imgSrc})`;
    });
});