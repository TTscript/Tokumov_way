/*jshint esversion: 6 */

const reviewsList = document.querySelector('.reviews__list');
const reviewsListItems = document.querySelectorAll('.reviews__list-item');
const reviewsTitle = document.querySelector('.reviews__title');
const reviewsDescription = document.querySelector('.reviews__text');
const reviewsImg = document.querySelector('.reviews__img');
const reviewsText = document.querySelector('.reviews__review-text');
const reviewsAuthorImg = document.querySelector('.reviews__review-author');


export const tabsActive = () => {

  reviewsList.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (evt.target.tagName === 'UL') {
      return;
    }

    const changeAuthor = (country) => {
      return `url('../img/reviews/${country}-author.png')`;
    };

    if (evt.target.textContent === 'Албания') {
      reviewsListItems.forEach((item) => item.classList.remove('reviews__list-item--on'));
      evt.target.classList.add('reviews__list-item--on');
      reviewsTitle.textContent = evt.target.textContent;
      reviewsDescription.textContent = 'В Албании мы посетим Курорт Ксамиль. Этот курорт поразит вас чистейшей водой и удивительным пляжем. Вначале кажется, что на пляже вас встречает обычный, правда невероятно белоснежный и слишком крупный песок. Однако, присмотревшись, можно понять, что это не песок, а камни, перетёртые до такого мелкого состояния.';
      reviewsImg.setAttribute('src', `img/reviews/albania.jpg`);
      reviewsText.textContent = 'Замечательный курорт, обязательно стоит посетить. В следующий раз возьму с собой сестру, чтобы тоже смогла вкусить все красоты природы :)';
      reviewsAuthorImg.textContent = 'Маришка';
      reviewsAuthorImg.style.setProperty('--background-image', changeAuthor('albania'));
    }  else if (evt.target.textContent === 'Македония') {
      reviewsListItems.forEach((item) => item.classList.remove('reviews__list-item--on'));
      evt.target.classList.add('reviews__list-item--on');
      reviewsTitle.textContent = evt.target.textContent;
      reviewsDescription.textContent = 'В Македонии нашей целью будет посетить Палаошник, который расположился в удивительно красивой лесистой местности возле Охридского озера и Самуиловой твердыни. А также мы заберемся на вершину горы Татичев Камен где находится  археологический памятник Кокино в длину около 100 метров.';
      reviewsImg.setAttribute('src', `img/reviews/macedonia.jpg`);
      reviewsText.textContent = 'Я бы сказал необычное старое здание. В архитектуре я не разбираюсь, но подъем в гору был очень веселым так как люди оказались легкими и заводными. Красота природы впечатлила, особенно после долгого пути в гору.';
      reviewsAuthorImg.textContent = 'Михаил Кузьмин';
      reviewsAuthorImg.style.setProperty('--background-image', changeAuthor('macedonia'));
    } else if (evt.target.textContent === 'Греция') {
      reviewsListItems.forEach((item) => item.classList.remove('reviews__list-item--on'));
      evt.target.classList.add('reviews__list-item--on');
      reviewsTitle.textContent = evt.target.textContent;
      reviewsDescription.textContent = 'На севере Греции находится один из крупнейших комплексов монастырей, расположенных на вершинах скал. Название его «Метеора» буквально переводится как «висящие в воздухе». Этот монастырь основная цель нашего путешествия в Греции. После покарения скал из песчанника и обломочной горной породы, достигающих в высоту 600 метров, наградой будет неописуемая красота природы и атмосфера, царящая в монастырях Метеоры. ';
      reviewsImg.setAttribute('src', `img/reviews/greece.jpg`);
      reviewsText.textContent = 'Метеоры в Греции можно сравнить разве что с Монсерратт в Испании. Такие же высоченные скалы. Но здесь потрясает масштаб. Огромная территория, высоко в горах. Ощущение такое, как будто стоишь на краю света! ';
      reviewsAuthorImg.textContent = 'Влада Голицина';
      reviewsAuthorImg.style.setProperty('--background-image', changeAuthor('greece'));
    } else if (evt.target.textContent === 'Черногория') {
      reviewsListItems.forEach((item) => item.classList.remove('reviews__list-item--on'));
      evt.target.classList.add('reviews__list-item--on');
      reviewsTitle.textContent = evt.target.textContent;
      reviewsDescription.textContent = 'Черногория удивит нас самым большим в Европе каньоном реки Тара, который в некоторых местах высотой берегов доходит до 1300 метров, а шириной не превышает трех. При этом длина каньона составляет 80 км. ';
      reviewsImg.setAttribute('src', `img/reviews/montenegro.jpg`);
      reviewsText.textContent = 'Неописуемой красоты каньон! Ничего прекраснее в жизни не видела, разве что в фильмах :) Всем советую';
      reviewsAuthorImg.textContent = 'Анастасия Мей';
      reviewsAuthorImg.style.setProperty('--background-image', changeAuthor('montenegro'));
    } else if (evt.target.textContent === 'Хорватия') {
      reviewsListItems.forEach((item) => item.classList.remove('reviews__list-item--on'));
      evt.target.classList.add('reviews__list-item--on');
      reviewsTitle.textContent = evt.target.textContent;
      reviewsDescription.textContent = 'В Хорватии мы посетим необычайную пещеру названную Бередине. Ее подземный мир увлечет вас на 80-ти метровую глубину через 5 освещенных залов, украшенных удивительными нерукотворными скульптурами —  сталактитами и сталагмитами —  формировавшимися тысячи и тысячи лет.';
      reviewsImg.setAttribute('src', `img/reviews/croatia.jpg`);
      reviewsText.textContent = 'Мы поехали всей семьей, я, моя жена и родители. Пещера просто незабываема! А то, что все это формировалось тысячелетиями, мега необычно. Первоначально даже не верилось, но натур ни с чем не спутать по итогу :)';
      reviewsAuthorImg.textContent = 'Владимир Мулицин';
      reviewsAuthorImg.style.setProperty('--background-image', changeAuthor('croatia'));
     }
  });
};
