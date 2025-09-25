document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const forgotBtn = document.getElementById('forgotBtn');
    const authSection = document.querySelector('.auth-section');

    loginBtn.addEventListener('click', () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if(email && password){
            alert(`Logged in as ${email}`);
            authSection.style.display = 'none'; // hide auth form
            document.querySelector('.sections-box').style.display = 'block';
        } else {
            alert('Please enter email and password.');
        }
    });

    signupBtn.addEventListener('click', () => {
        const email = document.getElementById('email').value;
        if(email){
            alert(`Sign up successful for ${email}`);
        } else {
            alert('Please enter email to sign up.');
        }
    });

    forgotBtn.addEventListener('click', () => {
        const email = document.getElementById('email').value;
        if(email){
            alert(`Password reset link sent to ${email}`);
        } else {
            alert('Please enter your email.');
        }
    });

    const trialBtn = document.getElementById('trialButton');
    const payBtn = document.querySelector('.intaSendPayButton');

    trialBtn.addEventListener('click', () => {
        alert('1-week free trial started!');
        payBtn.style.display = 'inline-block';
    });
});
