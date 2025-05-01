export async function showAnimation() {
   const chalkAnimation = await import("chalk-animation");

   const animation = chalkAnimation.rainbow("✨ pmpx: Package Manager Proxy ✨");

   setTimeout(() => {
      animation.stop();
      console.log("\nBack to work now 😄");
   }, 4000);
}
