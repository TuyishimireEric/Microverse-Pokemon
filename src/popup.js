import './popup.css';
import pokemon3 from './assets/images/pokemon3.png';

//  popup
const popup = document.createElement('div');
popup.id = 'popup';
popup.classList = 'popup';
document.body.appendChild(popup);

// popup-window
const popupWindow = document.createElement('div');
popupWindow.classList = 'popup-window';
popup.appendChild(popupWindow);

// popup-header
const popupHeader = document.createElement('div');
popupHeader.classList = 'popup-header';
popupWindow.appendChild(popupHeader);

// popup-header text
const popupHeaderText = document.createElement('h2');
popupHeaderText.id = 'popupHeaderText';
popupHeaderText.classList = 'popup-header-text';
popupHeaderText.innerHTML = 'Test'; /// /// for test
popupHeader.appendChild(popupHeaderText);

// popup-header X-btn
const xBtn = document.createElement('p');
xBtn.id = 'xBtn';
xBtn.classList = 'x-btn';
xBtn.innerHTML = 'X';
popupHeader.appendChild(xBtn);

// popup-image
const popupImage = document.createElement('img');
popupImage.id = 'popupImage';
popupImage.classList = 'popup-image';
popupImage.src = pokemon3; /// ////////// for test
popupImage.alt = 'pokemon';
popupWindow.appendChild(popupImage);

// popup-image-details
const popupDetail = document.createElement('div');
popupDetail.id = 'popupDetail';
popupDetail.classList = 'popup-image-detail d-grid-2col';
/// /////////////// for test
popupDetail.innerHTML = `
                <p class="popup-detail-item">Color : Green</p>
                <p class="popup-detail-item">Age : 6 years</p>
                <p class="popup-detail-item">Power : 132</p>
                <p class="popup-detail-item">Speed : 42 KM/h</p>
`;
popupWindow.appendChild(popupDetail);

// popup-comment-header
const popupCommentHeader = document.createElement('h3');
popupCommentHeader.classList = 'popup-comment-header';
popupCommentHeader.innerHTML = 'Comments (4)'; /// /////// for test
popupWindow.appendChild(popupCommentHeader);

// popup-engage section
const engage = document.createElement('div');
engage.classList = 'd-grid-2col';
popupWindow.appendChild(engage);

// popup-comment-review
const popupCommentReview = document.createElement('div');
popupCommentReview.classList = 'popup-comment-review';
engage.appendChild(popupCommentReview);

// popup-comment-list
const popupCommentList = document.createElement('ul');
popupCommentList.id = 'popupCommentList';
popupCommentList.classList = 'popup-comment-list';
popupCommentReview.appendChild(popupCommentList);

// popup-comment-item
/// ///////////// for test
popupCommentList.innerHTML = `
                        <li class="popup-comment-item">
                            <label class="popup-comment-author">alan</label>
                            <p class="popup-comment-text">this pokemon is too cute</p>
                        </li>
                        `;

// popup-new-comment
const popupNewComment = document.createElement('div');
popupNewComment.classList = 'popup-new-comment';
engage.appendChild(popupNewComment);

// popup-comment-input name
const popupCommentInputName = document.createElement('input');
popupCommentInputName.id = 'popupCommentInputName';
popupCommentInputName.classList = 'popup-comment-input';
popupCommentInputName.type = 'text';
popupCommentInputName.placeholder = 'Your name';
popupNewComment.appendChild(popupCommentInputName);

// popup-comment-input comment
const popupCommentInputComment = document.createElement('textarea');
popupCommentInputComment.id = 'popupCommentInputComment';
popupCommentInputComment.classList = 'popup-comment-input popup-new-comment-text';
popupCommentInputComment.cols = '15';
popupCommentInputComment.rows = '4';
popupCommentInputComment.placeholder = 'Comment...';
popupNewComment.appendChild(popupCommentInputComment);

// popup-comment-btn
const popupCommentBtn = document.createElement('a');
popupCommentBtn.id = 'popupCommentBtn';
popupCommentBtn.classList = 'popup-comment-btn';
popupCommentBtn.innerHTML = 'Comment';
popupNewComment.appendChild(popupCommentBtn);


xBtn.addEventListener('click', () =>{
    popup.classList.remove('display');
});
