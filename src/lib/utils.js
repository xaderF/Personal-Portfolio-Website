import {clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};

const ALLOWED_EXTERNAL_PROTOCOLS = new Set(["https:"]);

export const getSafeExternalUrl = (value) => {
    if (typeof value !== "string") {
        return null;
    }

    try {
        const parsed = new URL(value);
        if (!ALLOWED_EXTERNAL_PROTOCOLS.has(parsed.protocol)) {
            return null;
        }
        return parsed.toString();
    } catch {
        return null;
    }
};
