import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
    return (
        <ThirdwebProvider
            desiredChainId={ChainId.Goerli}
            chainRpc={{
                [ChainId.Goerli]: 'https://morning-still-cherry.ethereum-goerli.discover.quiknode.pro/047d186c60e8e64bb02fc02cadb7b473e3c146c1/',
            }}
        >
            <Component {...pageProps} />
        </ThirdwebProvider>
    )
}

export default MyApp
