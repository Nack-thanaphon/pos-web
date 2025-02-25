import UAParser from "ua-parser-js";

export function isPhone() {
  const userAgent = navigator.userAgent || navigator.vendor;
  // Check if user agent is a mobile phone
  if (
    /android|avantgo|bada\/|blackberry|bb|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(40|60)|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      userAgent
    )
  ) {
    return true;
  }

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return true;
  }

  // Check if user agent is an iPad (iOS 13 and above)
  if (
    /iPad|Macintosh/i.test(userAgent) &&
    navigator.maxTouchPoints &&
    navigator.maxTouchPoints > 1
  ) {
    return false; // Consider iPad as PC in this context
  }

  // Secondary check: screen width less than 768 pixels (common breakpoint for mobile devices)
  if (window.innerWidth < 768) {
    return true;
  }

  // Default to false if none of the above conditions are met
  return false;
}

export const showImage = (event: any, callback: (url: string) => void) => {
  const file = event.target.files[0];
  if (file && file.type.match("image.*")) {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (e.target?.result) {
        callback(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  }
};

export const showImageReturn = (event: any): Promise<string> => {
  return new Promise((resolve, reject) => {
    const file = event.target.files[0];
    if (file && file.type.match("image.*")) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result) {
          resolve(e.target.result as string);
        } else {
          reject(new Error("File reading failed"));
        }
      };
      reader.onerror = () => {
        reject(new Error("File reading error"));
      };
      reader.readAsDataURL(file);
    } else {
      reject(new Error("Invalid file type"));
    }
  });
};

export const getDeviceType = (): string => {
  const ua = navigator.userAgent;
  const parser = new UAParser(ua);
  return parser.getDevice().type || "desktop";
};

// common.util.ts
export const generateHref = (basePath: string): string => {
  // const deviceType = getDeviceType();
  const path = `/mobile/${basePath}`
  // Remove any double slashes
  return path.replace(/\/{2,}/g, '/');
};

export function isBase64(str: string): boolean {
  const base64Regex = /^(?:[A-Za-z0-9+\/]{4})*?(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/;
  return base64Regex.test(str);
}


export const isValidBase64Image = (url: string) => {
  const base64Pattern = /^data:image\/(jpeg|png|gif|bmp);base64,/;
  return base64Pattern.test(url);
};



// common.util.ts
export const formatNumberWithCommas = (number: number): string => {
  return number.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};
