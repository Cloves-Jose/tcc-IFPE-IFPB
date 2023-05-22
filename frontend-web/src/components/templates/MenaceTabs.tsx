import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


const MenaceTabs = () => {
    return (
        <Box>
            <AppBar>
                <Tabs>
                    <Tab label="Cadastro de ameaça"/>
                    <Tab label="Cadastro de categoria"/>
                </Tabs>
            </AppBar>
        </Box>
    )
}

export default MenaceTabs