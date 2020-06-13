let selectVal;
const uuid = document.getElementById('uuid');
const button = document.getElementById('button');
const select = document.getElementById('dropdown');

const animationHandler = {
    1: () => animateSphere(),
    2: () => animateCube(),
    3: () => animateCone(),
    4: () => {
        removeAll();
        document.getElementById('uuid').style.opacity = 0;
        uuid.removeEventListener('click', onClickCrossHandler, false);
    },
};

const onChangeSelectHandler = event => {
    selectVal = event.target.value;
};

const onClickCrossHandler = event => {
    document.getElementById('uuid').style.opacity = 0;
    uuid.removeEventListener('click', onClickCrossHandler, false);
    removeAll();
};

const onClickHandler = () => {
    const scaleElem = document.getElementById('scale');

    // const dropdown = document.getElementById('dropdown');
    // console.log('dropdown', dropdown.options.length);

    let scaleVal = scaleElem.value;
    if (scaleVal.length > 0 && !isNaN(scaleVal) && !!selectVal) {
        if (scaleVal <= 0) {
            scaleVal = 1
            document.getElementById('scale').value = scaleVal;
        }
        else if (scaleVal > 10) {
            scaleVal = 10;
            document.getElementById('scale').value = scaleVal;
        };

        document.getElementById('uuid-value').innerText = `UUID ${selectVal}`;
        document.getElementById('uuid').style.opacity = 1;
        uuid.addEventListener('click', onClickCrossHandler, false);
        animationHandler[selectVal]();
        camera.position.set(0, 0, scaleVal);
        renderer.render(scene, camera);
    } else {
        document.getElementById('scale').value = "";
    }
};

select.addEventListener('change', onChangeSelectHandler, false);
button.addEventListener('click', onClickHandler, false);
