document.addEventListener('DOMContentLoaded', () => {
  // 检查本地存储中是否存在已显示弹窗的记录
  const hasShownDialog = localStorage.getItem('dialogShown');

  // 如果已显示过弹窗，则不显示
  if (hasShownDialog) {
    // 获取弹窗已显示的时间戳
    const dialogShownTimestamp = localStorage.getItem('dialogShownTimestamp');

    // 计算自上次显示弹窗以来经过的时间（以小时为单位）
    const hoursSinceDialogShown = (Date.now() - dialogShownTimestamp) / (1000 * 60 * 60);

    // 如果自上次显示弹窗以来已超过 1 小时，则显示弹窗
    if (hoursSinceDialogShown >= 1) {
      // 显示弹窗代码...
      // 创建弹窗元素
      const dialogOverlay = document.createElement('div');
      dialogOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      `;
      document.body.appendChild(dialogOverlay);

      const dialogBox = document.createElement('div');
      dialogBox.style.cssText = `
        position: relative;
        background-color: #f9f9f9;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        max-width: 90%;
        max-height: 90%;
        overflow: auto;
        animation: fadeIn 0.5s ease;
      `;
      dialogBox.innerHTML = `
        <h2 style="color: #333; font-size: 24px; margin-bottom: 10px;">
          <span style="background: linear-gradient(to right, #ff0000, #ff7d00, #fffb00); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">偏爱AI完全免费使用。</span>
        </h2>
        <p style="color: #666; font-size: 16px; margin-bottom: 20px;">已对违规词进行屏蔽处理。</p>
        <p style="color: #666; font-size: 16px; margin-bottom: 20px;">
          <span style="color: red; font-weight: bold;">本站中转接口由木子聚合API免费赞助提供</span>
        </p>
        <p style="color: #666; font-size: 16px; margin-bottom: 20px;">
          如果你想自己搭建AI服务可以考虑使用木子中转<br>小白直接使用偏爱AI即可-完全免费<br>木子中转的和偏爱的AI没任何区别<br>小白直接使用偏爱AI即可-完全免费<br>木子聚合API: <a href="https://muziai.mom" style="color: #007bff; text-decoration: none;" target="_blank">https://muziai.mom</a>
        </p><br>
      `;
      dialogOverlay.appendChild(dialogBox);

      const closeButton = document.createElement('button');
      closeButton.textContent = '我明白了';
      closeButton.style.cssText = `
        position: absolute;
        right: 10px;
        bottom: 10px;
        background: #007bff;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
      `;
      closeButton.addEventListener('click', () => {
        dialogOverlay.style.display = 'none';

        // 设置本地存储，记录已显示弹窗
        localStorage.setItem('dialogShown', true);
        localStorage.setItem('dialogShownTimestamp', Date.now());
      });
      dialogBox.appendChild(closeButton);

      dialogOverlay.style.display = 'flex';

      // 添加淡入动画
      dialogOverlay.style.animation = 'fadeInOverlay 0.5s ease';

      // 淡入动画的关键帧
      const styleSheet = document.styleSheets[0];
      styleSheet.insertRule(`
        @keyframes fadeInOverlay {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `);
    } else {
      return;
    }
  } else {
    // 如果本地存储中没有已显示弹窗的记录，则显示弹窗
    // 显示弹窗代码...
    // 创建弹窗元素
    const dialogOverlay = document.createElement('div');
    dialogOverlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    `;
    document.body.appendChild(dialogOverlay);

    const dialogBox = document.createElement('div');
    dialogBox.style.cssText = `
      position: relative;
      background-color: #f9f9f9;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      z-index: 10000;
      max-width: 90%;
      max-height: 90%;
      overflow: auto;
      animation: fadeIn 0.5s ease;
    `;
    dialogBox.innerHTML = `
      <h2 style="color: #333; font-size: 24px; margin-bottom: 10px;">
        <span style="background: linear-gradient(to right, #ff0000, #ff7d00, #fffb00); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">偏爱AI完全免费使用。</span>
      </h2>
      <p style="color: #666; font-size: 16px; margin-bottom: 20px;">已对违规词进行屏蔽处理。</p>
      <p style="color: #666; font-size: 16px; margin-bottom: 20px;">
        <span style="color: red; font-weight: bold;">本站中转接口由木子聚合API免费赞助提供</span>
      </p>
      <p style="color: #666; font-size: 16px; margin-bottom: 20px;">
        如果你想自己搭建AI服务可以考虑使用木子中转<br>小白直接使用偏爱AI即可-完全免费<br>木子中转的和偏爱的AI没任何区别<br>小白直接使用偏爱AI即可-完全免费<br>木子聚合API: <a href="https://muziai.mom" style="color: #007bff; text-decoration: none;" target="_blank">https://muziai.mom</a>
      </p><br>
    `;
    dialogOverlay.appendChild(dialogBox);

    const closeButton = document.createElement('button');
    closeButton.textContent = '我明白了';
    closeButton.style.cssText = `
      position: absolute;
      right: 10px;
      bottom: 10px;
      background: #007bff;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
    `;
    closeButton.addEventListener('click', () => {
      dialogOverlay.style.display = 'none';

      // 设置本地存储，记录已显示弹窗
      localStorage.setItem('dialogShown', true);
      localStorage.setItem('dialogShownTimestamp', Date.now());
    });
    dialogBox.appendChild(closeButton);

    dialogOverlay.style.display = 'flex';

    // 添加淡入动画
    dialogOverlay.style.animation = 'fadeInOverlay 0.5s ease';

    // 淡入动画的关键帧
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
      @keyframes fadeInOverlay {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `);
  }
});
