(function() {
    'use strict';

    var events = ['app.record.create.show', 'app.record.edit.show'];

    kintone.events.on(events, function(event) {
        setTimeout(function() {
            // ルックアップフィールドのすべてのinput要素を取得
            var inputFields = document.querySelectorAll('.component-app-lookup-inputlookup .input-text-outer-cybozu input');

            // 各input要素について処理
            inputFields.forEach(function(inputField) {
                if (inputField && inputField.value !== '') {
                    // inputの値が空欄でない場合にのみ、「取得」ボタンをクリック
                    // input要素に最も近い親の.component-app-lookup-inputlookup要素を探す
                    var lookupContainer = inputField.closest('.component-app-lookup-inputlookup');

                    if (lookupContainer) {
                        var lookupButton = lookupContainer.querySelector('.button-simple-cybozu.input-lookup-gaia');
                        if (lookupButton) {
                            lookupButton.click();
                        } else {
                            console.error('Lookup button not found. Make sure the lookup field is visible and the page is fully loaded.');
                        }
                    }
                }
            });
        }, 1000); // タイミングの問題を避けるために少し待つ

        return event;
    });
})();
