((document) => {
  if (document.designMode.toLocaleLowerCase() === 'on') {
    document.designMode = 'off';
  } else {
    document.designMode = 'on';
  }
})(document)