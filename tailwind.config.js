module.exports = {
    theme: {
        extend: {
            spacing: {
                '80': '20rem',
                '108': '27rem',
            },
            borderWidth: {
                '14': '14px',
            }
        },
        container: {
            padding: '1rem'
        },
        colors: {
            background: {
                primary: 'var(--bg-background-primary)',
                secondary: 'var(--bg-background-secondary)',
                tertiary: 'var(--bg-background-tertiary)',

                form: 'var(--bg-background-form)',
            },

            copy: {
                primary: 'var(--text-copy-primary)',
                secondary: 'var(--text-copy-hover)',
            },

            'border-color': {
                primary: 'var(--border-border-color-primary)',
            },

            transparent: 'transparent',

            black: '#000',
            white: '#fff',

            green: {
                100: '#f0fff4',
                200: '#c6f6d5',
                300: '#9ae6b4',
                400: '#68d391',
                500: '#48bb78',
                600: '#38a169',
                700: '#2f855a',
                800: '#276749',
                900: '#22543d',
            },

            indigo: {
                100: '#e8eaf6',
                200: '#c5cae9',
                300: '#9fa8da',
                400: '#7986cb',
                500: '#3f51b5',
                600: '#3949ab',
                700: '#303f9f',
                800: '#283593',
                900: '#1a237e',
            },

            blue: {
                100: '#bbdefb',
                200: '#90caf9',
                300: '#64b5f6',
                400: '#42a5f5',
                500: '#2196f3',
                600: '#1e88e5',
                700: '#1976d2',
                800: '#1565c0',
                900: '#0d47a1',
            },

            orange: {
                100: '#fffaf0',
                200: '#feebc8',
                300: '#fbd38d',
                400: '#f6ad55',
                500: '#ed8936',
                600: '#dd6b20',
                700: '#c05621',
                800: '#9c4221',
                900: '#7b341e',
            },

            red: {
                100: '#fff5f5',
                200: '#fed7d7',
                300: '#feb2b2',
                400: '#fc8181',
                500: '#f56565',
                600: '#e53e3e',
                700: '#c53030',
                800: '#9b2c2c',
                900: '#742a2a',
            },

            gray: {
                100: '#f7fafc',
                200: '#edf2f7',
                300: '#e2e8f0',
                400: '#cbd5e0',
                500: '#a0aec0',
                600: '#718096',
                700: '#4a5568',
                800: '#2d3748',
                900: '#1a202c',
            },
        },
        fontFamily: {
            sans: [
                'Nunito Sans',
                'Roboto',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                '"Helvetica Neue"',
                'Arial',
                '"Noto Sans"',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"',
            ],
            serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
            mono: [
                'Menlo',
                'Monaco',
                'Consolas',
                '"Liberation Mono"',
                '"Courier New"',
                'monospace',
            ],
        },
    },
    variants: {
        // Some useful comment
    },
    plugins: [
        // Some useful comment
    ],
    purge: {
        enabled: true,
        content: [
            './themes/**/*.ejs',
            './themes/**/*.html',
        ]
    }
}
