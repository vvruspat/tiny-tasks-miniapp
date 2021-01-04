import bridge, { AnyReceiveMethodName, VKUpdateConfigData, VKBridgeEvent } from '@vkontakte/vk-bridge';
import React, { FC, createContext, useEffect, useState } from 'react';

export const BridgeConfigConext = createContext<VKUpdateConfigData | null>(null);

const BridgeConfig: FC<{}> = ({children}) => {
    const [configData, setConfigData] = useState<VKUpdateConfigData | null>(null);
    useEffect(() => {
        bridge.subscribe((event: VKBridgeEvent<AnyReceiveMethodName>) => {
            if (event.detail.type === 'VKWebAppUpdateConfig') {
                const data = event.detail.data as VKUpdateConfigData;
                console.log('VKWebAppUpdateConfig', event.detail.data);
                // VKUpdateConfigData
                if (data.viewport_height) {
                    setConfigData(data);
                }
            }
        });
    }, []);

    return <BridgeConfigConext.Provider value={configData}>{children}</BridgeConfigConext.Provider>
};

export default BridgeConfig;