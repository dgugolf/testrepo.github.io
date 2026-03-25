

      function redirectToStore(appStore, playstore) {
        const userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera;

        // Check for iOS
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          return appStore;
        }

        // Check for Android
        if (/android/i.test(userAgent)) {
          return playstore;
        }

        // Check for Windows
        if (/windows/i.test(userAgent)) {
          return playstore;
        }

        // Check for MacOS
        if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent)) {
          return appStore;
        }

        // Check for Linux
        if (/linux/i.test(userAgent)) {
          return playstore;
        }

        return playstore;
      }

      function isPlayStoreFlow() {
        const userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera;

        // Check for iOS
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          return false;
        }

        // Check for Android
        if (/android/i.test(userAgent)) {
          return true;
        }

        // Check for Windows
        if (/windows/i.test(userAgent)) {
          return true;
        }

        // Check for MacOS
        if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent)) {
          return false;
        }

        // Check for Linux
        if (/linux/i.test(userAgent)) {
          return true;
        }

        return true;
      }

      function storeName() {
        const userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera;
        const appStore = "App Store"
        const playstore = "Play Store"
        // Check for iOS
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          return appStore;
        }

        // Check for Android
        if (/android/i.test(userAgent)) {
          return playstore;
        }

        // Check for Windows
        if (/windows/i.test(userAgent)) {
          return playstore;
        }

        // Check for MacOS
        if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent)) {
          return appStore;
        }

        // Check for Linux
        if (/linux/i.test(userAgent)) {
          return playstore;
        }

        return playstore;
      }

      function getUrlParams() {
        const params = new URLSearchParams(window.location.search);
        let paramStr = "";

        params.forEach((value, key) => {
            paramStr += `${key}=${value}&`;
        });

        // Remove the last '&' if any parameters were added
        if (paramStr.length > 0) {
            paramStr = paramStr.slice(0, -1);
        }

        return paramStr;
    }

    function getPathFromUrl() {
      let path = window.location.pathname; // e.g., "/some/path"
      return path;
    }
