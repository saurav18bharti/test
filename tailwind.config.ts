/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		backgroundImage: {
  			bannerGradient: 'linear-gradient(180.31deg, rgba(51, 0, 255, 0.13) 17.51%, rgba(217, 217, 217, 0) 84.68%)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			primaryDark: {
  				DEFAULT: 'hsl(var(--primary-dark))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			content1: {
  				DEFAULT: 'hsl(var(--content1))'
  			},
  			content2: {
  				DEFAULT: 'hsl(var(--content2))'
  			},
  			content3: {
  				DEFAULT: 'hsl(var(--content3))'
  			},
  			border: 'hsl(var(--border))',
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			paperColor: '#fff',
  			primaryGradient: '#4E55F1',
  			secondaryGradient: '#9D3CFF',
  			galaxyPrimary: '#7761FF',
  			galaxyPrimaryDark: '#573FEC',
  			galaxyBg: '#081521',
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		keyframes: {
  			slideRightAnimate: {
  				'0%': {
  					opacity: 1,
  					transform: 'translateX(0px)'
  				},
  				'50%': {
  					opacity: 0,
  					transform: 'translateX(100%)'
  				},
  				'51%': {
  					opacity: 0,
  					transform: 'translateX(-90%)'
  				},
  				'100%': {
  					opacity: 1,
  					transform: 'translateX(0px)'
  				}
  			},
  			fadeUp: {
  				'0%': {
  					opacity: 0,
  					transform: 'translateY(12px)'
  				},
  				'100%': {
  					opacity: 1,
  					transform: 'translateY(0px)'
  				}
  			},
  			slideDownAndFade: {
  				from: {
  					opacity: 0,
  					transform: 'translateY(-2px)'
  				},
  				to: {
  					opacity: 1,
  					transform: 'translateY(0)'
  				}
  			},
  			slideLeftAndFade: {
  				from: {
  					opacity: 0,
  					transform: 'translateX(2px)'
  				},
  				to: {
  					opacity: 1,
  					transform: 'translateX(0)'
  				}
  			},
  			slideUpAndFade: {
  				from: {
  					opacity: 0,
  					transform: 'translateY(2px)'
  				},
  				to: {
  					opacity: 1,
  					transform: 'translateY(0)'
  				}
  			},
  			slideRightAndFade: {
  				from: {
  					opacity: 0,
  					transform: 'translateX(-2px)'
  				},
  				to: {
  					opacity: 1,
  					transform: 'translateX(0)'
  				}
  			}
  		},
  		animation: {
  			slideRight: 'slideRightAnimate 0.4s ease-in-out',
  			fadeUp: 'fadeUp 0.4s ease-in-out',
  			slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
  			slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
  			slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
  			slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)'
  		},
  		fontSize: {
  			ms: '15px',
  			'2xs': '12px'
  		},
  		borderRadius: {
  			medium: '0.625rem',
  			large: '1.25rem',
  			'4xl': '2rem',
  			'5xl': '2.5rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontFamily: {
  			publicSans: [
  				'var(--font-publicSans)'
  			],
  			modernist: [
  				'var(--font-modernist)'
  			],
  			inter: [
  				'var(--font-inter)'
  			],
  			manrope: [
  				'var(--font-manrope)'
  			],
  			gabarito: [
  				'var(--font-gabarito)'
  			],
  			body: [
  				'var(--font-inter)'
  			]
  		},
  		screens: {
  			xsm: '360px',
  			'2lg': '1140px'
  		},
  		spacing: {
  			navbar: 'var(--navbarHeight)',
  			secondaryNavbar: 'var(--secondaryNavbarHeight)',
  			bothNavHeight: 'var(--bothNavHeight)'
  		}
  	}
  },
  darkMode: ["class", "class"],
  plugins: [require("tailwindcss-animate")],
};
