import IRESTClientBuilder from "@fusionauth/typescript-client/build/src/IRESTClientBuilder";
import DefaultRESTClientNative from "@/lib/DefaultRESTClientNative";

export default class DefaultRESTClientNativeBuilder implements IRESTClientBuilder{
    build(host) {
        return new DefaultRESTClientNative(host);
    }
}