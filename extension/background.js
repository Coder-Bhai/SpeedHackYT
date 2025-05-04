  chrome.commands.onCommand.addListener((command) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (!tabs[0]) return;

      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: (cmd) => {
          const video = document.querySelector('.html5-main-video');
          if (!video) {
            alert("No video element found.");
            return;
          }
          //Coder-Bhai
          // Determine new speed
          let newSpeed;
          if (cmd === "increase-speed") {
            newSpeed = Math.round((video.playbackRate + 0.25) * 100) / 100;
          } else if (cmd === "decrease-speed") {
            newSpeed = Math.max(0.25, Math.round((video.playbackRate - 0.25) * 100) / 100);
          }else if (cmd === "speed-1x") {
            newSpeed = 1;
          } else if (cmd === "speed-10x") {
            newSpeed = 10;
          }

          video.playbackRate = newSpeed;

          // Create or update popup
          let popup = document.getElementById('speed-popup');
          if (!popup) {
            popup = document.createElement('div');
            popup.id = 'speed-popup';
            document.body.appendChild(popup);
          }

          // Always re-apply styles in case they got overridden or changed
          Object.assign(popup.style, {
            position: 'fixed',
            bottom: '60px',
            right: '20px',
            //backgroundColor: 'rgba(0, 55, 255, 0.85)', // ✅ Try a visible blue shade
            backgroundImage: 'linear-gradient(45deg, #D4145A, #FF4B2B)',
            color: '#fff',
            padding: '8px 14px',
            fontSize: '14px',
            borderRadius: '6px',
            fontFamily: 'Arial, sans-serif',
            zIndex: '9999',
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none', // ⬅️ makes popup not block clicks
            border: '2px solid white', // ✅ Fix: border size and color
            opacity: '1'
          });

          popup.textContent = `Speed: ${video.playbackRate.toFixed(2)}x`;

          clearTimeout(popup._timer);
          popup._timer = setTimeout(() => {
            popup.style.opacity = '0';
          }, 2000);
        },
        args: [command]
      });
    });
  });
