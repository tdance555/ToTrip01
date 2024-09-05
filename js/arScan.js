// 修改區開始----------------------------------------------------------------------------------------------
var postDetailUrl = "https://tdance.fansee.studio/trips/api/post-detail/";
var questionUrl="https://tdance.fansee.studio/trips/api/question/";
var postUrl="https://tdance.fansee.studio/trips/api/post/";

// 修改區結束----------------------------------------------------------------------------------------------

 
//  // 函數：獲取指定名稱的 cookie 值
//  function getCookie(name) {
//     let nameEQ = name + "=";
//     let ca = document.cookie.split(';');
//     for (let i = 0; i < ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) == ' ') c = c.substring(1, c.length);
//         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
//     }
//     return null;
// }

// $(document).ready(function () {
//     let targetFoundOnce = false;
//     let phone = getCookie('phone');
//     // let postDetailUrl = "https://tdance.fansee.studio/trips/api/post-detail/";

//     // 監聽每個 targetIndex 的事件
//     for (let i = 0; i <= 28; i++) {
//         let mindarEntity = document.querySelector(`a-entity[mindar-image-target="targetIndex: ${i}"]`);

//         mindarEntity.addEventListener('targetFound', function (event) {
//             if (!targetFoundOnce) {
//                 targetFoundOnce = true;

//                 let level = String(i + 1);  // 將 targetIndex 轉換為對應的 level（1 到 29）

//                 // 獲取關卡狀態
//                 $.ajax({
//                     url: postDetailUrl + phone,
//                     type: "GET",
//                     dataType: "json",
//                     success: function (data) {
//                         let status = data.content[level].status;
//                         $('.center-box').fadeIn();

//                         if (status === 'pass' || status === 'fail') {
//                             $('.status-message').html('<h3>你已做出選擇，請繼續前行吧</h3>');
//                             $('.center-box').fadeIn();
//                         } else {
//                             // 如果是null，則顯示問題和選項
//                             $.ajax({
//                                 url: questionUrl + level,
//                                 type: "GET",
//                                 dataType: "json",
//                                 success: function (Question) {
//                                     var correctAnswer = Question.answer;
//                                     var content = `
//                                         <div class="question">${Question.question}</div>
//                                         <button class="option" data-choice="A">${Question.choiceA}</button>
//                                         <button class="option" data-choice="B">${Question.choiceB}</button>
//                                         <button class="option" data-choice="C">${Question.choiceC}</button>
//                                         <button class="option" data-choice="D">${Question.choiceD}</button>
//                                         <div class="result"></div>
//                                     `;
//                                     $('.center-box').html(content);

//                                     $('.option').click(function () {
//                                         var userChoice = $(this).data('choice');
//                                         var resultStatus = userChoice === correctAnswer ? 'pass' : 'fail';

//                                         // 移除問題和選項按鈕
//                                         $('.question, .option').remove();

//                                         if (resultStatus === 'pass') {
//                                             $('.result').html('<p>恭喜通關</p><img src="https://github.com/tdance555/tdance2024/blob/beforeFinish/media/vendor_icons/correct.png?raw=true" alt="Success Image"><button class="continue-btn" onclick="window.history.back()">繼續前行</button>');
//                                         } else {
//                                             $('.result').html('<p>挑戰失敗</p><img src="https://github.com/tdance555/tdance2024/blob/beforeFinish/media/vendor_icons/wrong.png?raw=true" alt="Failure Image"><button class="continue-btn" onclick="window.history.back()">繼續前行</button>');
//                                         }

//                                         $('.result').fadeIn();

//                                         // 發送 PATCH 請求更新數據
//                                         $.ajax({
//                                             url: postUrl+phone,
//                                             // url: `https://tdance.fansee.studio/trips/api/post/${phone}/`,
//                                             type: "PATCH",
//                                             contentType: "application/json",
//                                             data: JSON.stringify({
//                                                 level: level,
//                                                 status: resultStatus,
//                                                 user_answer: userChoice,
//                                                 correct_answer: correctAnswer
//                                             }),
//                                             success: function (response) {
//                                                 console.log("數據更新成功:", response);
//                                             },
//                                             error: function (xhr, status, error) {
//                                                 console.error("更新失敗:", xhr.responseText);
//                                             }
//                                         });
//                                     });
//                                 },
//                                 error: function (xhr, status, error) {
//                                     console.error("獲取問題失敗:", xhr.responseText);
//                                 }
//                             });
//                         }
//                     },
//                     error: function (xhr, status, error) {
//                         console.error("獲取數據失敗:", xhr.responseText);
//                     }
//                 });
//             }
//         });
//     }
// });