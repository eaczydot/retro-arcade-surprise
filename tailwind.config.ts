
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Sixers colors from style guide
				sixers: {
					red: '#EF1C2D',
					blue: '#1C75BC',
					navy: '#001F5B',
					orange: '#FFA031',
					green: '#0AA757',
				},
				// Neon colors
				neon: {
					green: '#39FF14',
					pink: '#FF3366',
					cyan: '#00FFFF',
					yellow: '#FFFF00',
				},
				// Arcade dark backgrounds
				arcade: {
					dark: '#121212',
					darker: '#0A0A0A',
					black: '#000000',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'blink': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' }
				},
				'pixel-move': {
					'0%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
					'100%': { transform: 'translateY(0)' }
				},
				'glitch': {
					'0%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' },
					'100%': { transform: 'translate(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'marquee': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'blink': 'blink 1s step-start infinite',
				'pixel-move': 'pixel-move 2s ease-in-out infinite',
				'glitch': 'glitch 0.8s ease-in-out infinite alternate',
				'float': 'float 6s ease-in-out infinite',
				'marquee': 'marquee 25s linear infinite'
			},
			fontFamily: {
				'press-start': ['"Press Start 2P"', 'cursive'],
				'vt323': ['"VT323"', 'monospace'],
				'pixel': ['"Silkscreen"', 'cursive'],
			},
			backgroundImage: {
				'sixers-pattern': "url('/public/lovable-uploads/1cb107c0-4392-45d7-988b-fc2dd1174396.png')",
				'sixers-horizontal': "url('/public/lovable-uploads/b063c7f6-c145-4e6f-8a99-e3c253e76721.png')",
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
