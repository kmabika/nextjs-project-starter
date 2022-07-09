import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/global";
import theme from "styles/theme";

const Provider = ({children}: any) => {
    const [mounted,setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, [])

    const body = <ThemeProvider  theme={theme}><GlobalStyles/> {children}</ThemeProvider>

    return (
        <div>
            {mounted && body}
        </div>
    )
}

export default Provider;