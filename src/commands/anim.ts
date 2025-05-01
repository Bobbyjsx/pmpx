import chalkAnimation from "chalk-animation";

export function showAnimation() {
   const animation = chalkAnimation.rainbow("✨ pmpx: Package Manager Proxy ✨");
   setTimeout(() => {
      animation.stop();
      console.log("\nBack to work now 😄");
   }, 4000);
}
