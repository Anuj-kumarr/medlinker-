import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';

const MediAi = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        "composerPlaceholder": "Chat with bot",
        "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
        "botId": "1ee9767d-2198-414e-adf2-3f85d4a3c154",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "1ee9767d-2198-414e-adf2-3f85d4a3c154",
        "webhookId": "e7739a9e-bb5d-470b-b2a8-5b7a1290751c",
        "lazySocket": true,
        "themeName": "prism",
        "frontendVersion": "v1",
        "showPoweredBy": true,
        "theme": "prism",
        "themeColor": "#2563eb"
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box id="botpress-webchat">
        {/* <Tex> Click here to chat with our bot</Text> */}
    </Box>
  );
};

export default MediAi;

