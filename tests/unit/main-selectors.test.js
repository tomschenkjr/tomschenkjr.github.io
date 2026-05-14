const fs = require('fs');
const path = require('path');

const MAIN_JS_PATH = path.join(__dirname, '../../assets/js/_main.js');

// jQuery and plugin stubs are loaded via jest setupFiles (jquery-setup.js)

describe('Image popup class assignment', () => {
  const applyImagePopupClass = () => {
    $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']")
      .addClass('image-popup');
  };

  beforeEach(() => {
    document.body.innerHTML = `
      <a href="photo.jpg">JPEG</a>
      <a href="photo.jpeg">JPEG full extension</a>
      <a href="photo.JPG">JPEG uppercase</a>
      <a href="photo.png">PNG</a>
      <a href="photo.gif">GIF</a>
      <a href="document.pdf">PDF</a>
      <a href="page.html">HTML page</a>
      <a href="archive.zip">ZIP</a>
      <a href="/about/">Internal link</a>
    `;
    applyImagePopupClass();
  });

  test.each([
    ['photo.jpg', true],
    ['photo.jpeg', true],
    ['photo.JPG', true],
    ['photo.png', true],
    ['photo.gif', true],
    ['document.pdf', false],
    ['page.html', false],
    ['archive.zip', false],
    ['/about/', false],
  ])('href="%s" gets image-popup class: %s', (href, expected) => {
    expect($(`a[href="${href}"]`).hasClass('image-popup')).toBe(expected);
  });

  test('_main.js contains the expected image extension selector', () => {
    const source = fs.readFileSync(MAIN_JS_PATH, 'utf8');
    expect(source).toContain("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']");
  });

  test('_main.js calls .addClass("image-popup") on image links', () => {
    const source = fs.readFileSync(MAIN_JS_PATH, 'utf8');
    expect(source).toContain('.addClass("image-popup")');
  });
});

describe('Navigation click-outside behavior', () => {
  let toggleMock;

  beforeEach(() => {
    document.body.innerHTML = '<div id="site-nav" class="opened">Nav content</div>';

    toggleMock = jest.fn();
    global.navigation = {
      wrapper: document.querySelector('#site-nav'),
      toggle: toggleMock,
    };

    // Re-attach handlers as _main.js would on page load
    $('html').off('click').on('click', function() {
      if ($(navigation.wrapper).hasClass('opened')) {
        navigation.toggle();
      }
    });

    $('#site-nav').off('click').on('click', function(event) {
      event.stopPropagation();
    });
  });

  test('clicking html element when nav is opened triggers toggle', () => {
    $('html').trigger('click');
    expect(toggleMock).toHaveBeenCalledTimes(1);
  });

  test('clicking inside #site-nav does not trigger toggle (stopPropagation)', () => {
    $('#site-nav').trigger('click');
    expect(toggleMock).not.toHaveBeenCalled();
  });

  test('toggle is not called when nav does not have opened class', () => {
    $('#site-nav').removeClass('opened');
    $('html').trigger('click');
    expect(toggleMock).not.toHaveBeenCalled();
  });
});
