export default function svgRoom() {
  if(window.innerWidth > 600) {
    const buttons = document.querySelector('.-js-room-text');
    const obj = document.querySelector('.-js-room');

    obj.onload = () => {
      const objDocument = obj.contentDocument;
      const svg = objDocument.querySelector('svg');
      buttons.addEventListener('click', (event) => {
        console.log('click');
        const el = event.target;
        if (el.tagName === 'SPAN') {
          requestAnimationFrame(() => {
            svg.setAttribute('class', `svg ${el.dataset.name}`);
          });
        }

      });
      buttons.addEventListener('mouseleave', () => {
        console.log('leave');
        requestAnimationFrame(() => {
          svg.setAttribute('class', ``);
        });
      });
    };

  }
}
