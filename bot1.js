window.botpressWebChat.init({
                'botName': 'Fin',                  
                'composerPlaceholder': 'Enter text here',
                'botConversationDescription': 'Credit Pull Search',
                'botId': '0e38537e-381d-4e4a-9d27-9fab185f97dd',
                'hostUrl': 'https://cdn.botpress.cloud/webchat/v0',
                'messagingUrl': 'https://messaging.botpress.cloud',
                'clientId': '0e38537e-381d-4e4a-9d27-9fab185f97dd',
                'enableConversationDeletion': true,
                'showPoweredBy': false,
                'className': 'webchatIframe',
                  'containerWidth': '100%25',
                  'layoutWidth': '100%25',
                'hideWidget': true,
                'showCloseButton': false,
      'useSessionStorage': true,
                'disableAnimations': true,
                'closeOnEscape': false,
                'showConversationsButton': false,
                'enableTranscriptDownload': false,
                'stylesheet':'https://webchat-styler-css.botpress.app/prod/code/05a7e850-0904-468e-a567-a076cb03300a/v54229/style.css'
              });

        window.addEventListener('beforeunload', function() {
                sessionStorage.clear();
                localStorage.clear();
        });


window.botpressWebChat.onEvent(function (event) {
    if (event.type === 'LIFECYCLE.LOADED') {
        console.log('LIFECYCLE.LOADED event triggered');
        window.botpressWebChat.sendEvent({ type: 'show' });

setTimeout(function() {
            window.botpressWebChat.sendPayload({
                type: 'trigger',
                payload: {
                    BID: 'Pull'
                }
            });
        }, 1000);
    } else if (event.type === 'MESSAGE.RECEIVED') {
        console.log('MESSAGE.RECEIVED event received', event);

        // Check for button choices
        if (event.value.payload?.choices?.length > 0) {
            console.log('choices detected');
            window.botpressWebChat.mergeConfig({ 
                stylesheet: 'https://webchat-styler-css.botpress.app/prod/code/05a7e850-0904-468e-a567-a076cb03300a/v54229/style.css' 
            });

        // Check for a dropdown
        } else if (event.value.payload?.type === 'dropdown') {
            console.log('Dropdown message received');
            window.botpressWebChat.mergeConfig({ 
                stylesheet: 'https://webchat-styler-css.botpress.app/prod/code/05a7e850-0904-468e-a567-a076cb03300a/v54229/style.css' 
            });

            // Add any specific handling for dropdown messages here

        // Handle messages that are neither choices nor dropdown
        } else {
            console.log('No choices or dropdown detected');
            window.botpressWebChat.mergeConfig({ 
                stylesheet: 'https://webchat-styler-css.botpress.app/prod/code/05a7e850-0904-468e-a567-a076cb03300a/v88067/style.css' 
            });
        }
    }
}, ['LIFECYCLE.LOADED', 'MESSAGE.RECEIVED']);

console.log('Botpress Web Chat initialized');
