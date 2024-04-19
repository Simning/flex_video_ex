const articles = document.querySelectorAll('article'); // 모든 article 요소를 선택합니다.
const aside = document.querySelector('aside'); // aside 요소를 선택합니다.
const btnClose = document.querySelector('.btnClose'); // .btnClose 클래스를 가진 요소를 선택합니다.

articles.forEach(article => {
  // 각 article에 이벤트 리스너를 추가합니다.
  article.addEventListener('mouseenter', e => {
    // 마우스가 article 위에 올라갔을 때 video를 재생합니다.
    e.currentTarget.querySelector('video').play();
  });

  // 각 article에 이벤트 리스너를 추가합니다.
  article.addEventListener('mouseleave', e => {
    // 마우스가 article에서 벗어났을 때 video를 멈춥니다.
    e.currentTarget.querySelector('video').pause();
  });

  // 각 article에 이벤트 리스너를 추가합니다.
  article.addEventListener('click', e => {
    // article을 클릭했을 때 제목, 내용, 비디오 소스를 가져와서 aside 요소에 표시합니다.
    const tit = e.currentTarget.querySelector('h2').innerText; // 제목을 가져옵니다.
    const con = e.currentTarget.querySelector('p').innerText; // 내용을 가져옵니다.
    const vidSrc = e.currentTarget.querySelector('video').getAttribute('src'); // 비디오 소스를 가져옵니다.

    // 가져온 제목과 내용을 aside 요소에 설정합니다.
    aside.querySelector('h2').innerText = tit;
    aside.querySelector('p').innerText = con;
    aside.querySelector('video').setAttribute('src', vidSrc); // 비디오 소스를 설정합니다.
    aside.classList.add('on'); // aside 요소에 'on' 클래스를 추가하여 표시합니다.
  });

  // btnClose 요소에 클릭 이벤트 리스너를 추가합니다.
  btnClose.addEventListener('click', e => {
    aside.classList.remove('on'); // aside 요소에서 'on' 클래스를 제거하여 숨깁니다.
  });
});