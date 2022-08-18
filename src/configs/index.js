const getEnv = () => {
    const parts = window.location.hostname.split(".")
    const env = parts.shift();
    switch(env){
        case 'staging':
            return "staging"
        case "rider":
            return "production"
        default:
            return 'development'
    }
}

const config = {
    APP_ENV : getEnv()
}
export default config