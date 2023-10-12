import { useEffect } from 'react';

const YaAuthSuggestComponent = () => {
    useEffect(() => {
        const loadScript = async () => {
            try {
                // @ts-ignore
                if (window.YaAuthSuggest) {
                    // @ts-ignore
                    const { handler } = await window.YaAuthSuggest.init(
                        {
                            client_id: 'c46f0c53093440c39f12eff95a9f2f93',
                            response_type: 'token',
                            redirect_uri: 'https://examplesite.com/suggest/token'
                        },
                        // @ts-ignore
                        tokenPageOrigin,
                        // {
                        //     view: 'button',
                        //     parentId: 'buttonContainerId',
                        //     buttonSize: 'm',
                        //     buttonView: 'main',
                        //     buttonTheme: 'light',
                        //     buttonBorderRadius: '10',
                        //     buttonIcon: 'ya',
                        // }
                    );
                    handler()
                        .then((data: any) => console.log('Message with token', data))
                        .catch((error: any) => console.log('Error handling', error));
                } else {
                    console.error('YaAuthSuggest not found in a global object window');
                }
            } catch (error) {
                console.error('Error of initialization YaAuthSuggest', error);
            }
        };

        // Script loading
        const script = document.createElement('script');
        script.src = 'https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-with-polyfills-latest.js';
        script.async = true;
        script.onload = loadScript;
        document.body.appendChild(script);

        return () => {
        };
    }, []);

    return <div id="buttonContainerId" />;
};

export default YaAuthSuggestComponent;
