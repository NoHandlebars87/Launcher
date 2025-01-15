const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');

module.exports = {
    packagerConfig: {
        asar: true,
        icon: 'assets/icon',
        win32metadata: {
            ProductName: 'Lost City Launcher'
        }
    },
    rebuildConfig: {},
    makers: [
        // Windows
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                setupIcon: 'assets/icon.ico'
            },
        },
        // Universal
        {
            name: '@electron-forge/maker-zip',
            config: {
                bin: 'lc-launcher'
            }
        }
    ],
    plugins: [
        {
            name: '@electron-forge/plugin-auto-unpack-natives',
            config: {},
        },
        new FusesPlugin({
            version: FuseVersion.V1,
            [FuseV1Options.RunAsNode]: false,
            [FuseV1Options.EnableCookieEncryption]: true,
            [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
            [FuseV1Options.EnableNodeCliInspectArguments]: false,
            [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
            [FuseV1Options.OnlyLoadAppFromAsar]: true,
        }),
    ],
    publishers: [
        {
            name: '@electron-forge/publisher-github',
            config: {
                repository: {
                    owner: 'LostCityRS',
                    name: 'Launcher'
                }
            }
        }
    ]
};
