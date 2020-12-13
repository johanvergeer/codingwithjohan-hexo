module.exports = {
        '**/*.+{js|md|ts|sass|css|less|yml|yaml|scss|json}': [
            'eslint --fix',
            'prettier --write',
        ]
}