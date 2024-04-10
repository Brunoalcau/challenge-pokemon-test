

import { AvatarFallback, AvatarImage, Avatar as AvatarNative } from "@/components/ui/avatar";
import { getFirstLetter } from "@/lib/utils";


type Props = {
    textFallBack?: string
    src?: string
}

 export const Avatar = ({ textFallBack = '', src }: Props) => {
    return (
        <AvatarNative>
            <AvatarImage role="img" src={src} />
            <AvatarFallback>
                {getFirstLetter(textFallBack)}
            </AvatarFallback>
        </AvatarNative>
    );
 };