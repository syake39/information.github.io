document.addEventListener('DOMContentLoaded', () => {
    // 各ページの要素を取得
    const pageInput = document.getElementById('page-input');
    const pageConfirm = document.getElementById('page-confirm');
    const pageThanks = document.getElementById('page-thanks');

    // 各ボタンの要素を取得
    const confirmButton = document.getElementById('confirm-button');
    const backButton = document.getElementById('back-button');
    const submitButton = document.getElementById('submit-button');
    const backToTopLink = document.getElementById('back-to-top');
    
    // フォームと入力フィールドの要素を取得
    const form = document.getElementById('inquiry-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // 「確認する」ボタンの処理
    confirmButton.addEventListener('click', () => {
        const name = nameInput.value;
        const email = emailInput.value;

        // 簡単なバリデーション
        if (!name || !email) {
            alert('お名前とメールアドレスは必須項目です。');
            return;
        }
        
        // 確認ページに入力内容を表示
        document.getElementById('confirm-name').textContent = name;
        document.getElementById('confirm-email').textContent = email;
        document.getElementById('confirm-message').textContent = messageInput.value || '（入力されていません）';

        // 入力ページを非表示にし、確認ページを表示
        pageInput.classList.remove('active');
        pageConfirm.classList.add('active');
    });

    // 「修正する」ボタンの処理
    backButton.addEventListener('click', () => {
        // 確認ページを非表示にし、入力ページを表示
        pageConfirm.classList.remove('active');
        pageInput.classList.add('active');
    });

    // 「送信する」ボタンの処理
    submitButton.addEventListener('click', () => {
        // ここで実際にサーバーにデータを送信する処理を記述します。
        // 今回はプロトタイプのため、完了ページに遷移するだけにします。
        
        // 確認ページを非表示にし、完了ページを表示
        pageConfirm.classList.remove('active');
        pageThanks.classList.add('active');
    });
    
    // 「トップに戻る」リンクの処理
    backToTopLink.addEventListener('click', (e) => {
        e.preventDefault(); // リンクのデフォルト動作を無効化
        form.reset(); // フォームの内容をリセット
        
        // 完了ページを非表示にし、入力ページを表示
        pageThanks.classList.remove('active');
        pageInput.classList.add('active');
    });
});

