<style>
.sakana-box {
  position: fixed;
  left: 50px;
  bottom: 0;
  transform-origin: 0% 100%;
}
@media (max-width: 768px) {
  .sakana-box {
    display: none;
  }
}
</style>
<div class="sakana-box"></div>
<script src="https://cdn.jsdelivr.net/npm/sakana"></script>
<script>
Sakana.init({
  el:         '.sakana-box',     // 启动元素 node 或 选择器
  scale:      .5,                // 缩放倍数
  canSwitchCharacter: true,      // 允许换角色
});
Sakana.setMute(false);
</script>
