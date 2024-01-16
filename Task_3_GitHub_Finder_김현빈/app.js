
const github = new Github;
const ui = new UI;
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== ''){
    // HTML call 
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found') {
          // 데이터가 없는경우 
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          // 데이터가 있다면 
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    // 공백일 경우
    ui.clearProfile();
  }
});