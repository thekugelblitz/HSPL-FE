{/* Confetti Celebration Script */ }
<Script id="confetti-blast" strategy="afterInteractive">
    {`
					// Run only once when page loads
					(function() {
					function fireConfetti() {
						var duration = 3 * 1000; // 3 seconds
						var animationEnd = Date.now() + duration;
						var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

						function randomInRange(min, max) {
						return Math.random() * (max - min) + min;
						}

						var interval = setInterval(function() {
						var timeLeft = animationEnd - Date.now();

						if (timeLeft <= 0) {
							return clearInterval(interval);
						}

						var particleCount = 50 * (timeLeft / duration);
						// Since confetti.js is lightweight, load via CDN
						if (typeof confetti === "function") {
							confetti(Object.assign({}, defaults, {
							particleCount,
							origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
							}));
							confetti(Object.assign({}, defaults, {
							particleCount,
							origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
							}));
						}
						}, 250);
					}

					// Load confetti lib from CDN
					var script = document.createElement("script");
					script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
					script.onload = fireConfetti;
					document.body.appendChild(script);
					})();
				`}
</Script>