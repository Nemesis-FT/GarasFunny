import {
    AppBar,
    Button,
    MenuList,
    MenuListItem, Monitor,
    Separator,
    Toolbar, Window,
    WindowContent,
    WindowHeader
} from "react95";
import {useState} from "react";
import logoIMG from '../logo.svg';

export function Main() {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <AppBar>
                <Toolbar style={{justifyContent: 'space-between'}}>
                    <div style={{position: 'relative', display: 'inline-block'}}>
                        <Button onClick={() => setOpen(!open)} active={open} style={{fontWeight: 'bold'}}>
                            <img src={logoIMG} alt='react95 logo' style={{height: '20px', marginRight: 4}}/>
                            Garasauto
                        </Button>
                        {open && (
                            <MenuList style={{position: 'absolute', left: '0', top: '100%'}}
                                      onClick={() => setOpen(false)}>
                                <MenuListItem disabled>
                                    <span role='img' aria-label='👨‍'>👨‍</span>
                                    Become real
                                </MenuListItem>
                                <MenuListItem disabled>
                                    <span role='img' aria-label='📁'>📁</span>
                                    Do something with your life
                                </MenuListItem>
                                <Separator/>
                                <MenuListItem onClick={event => {
                                    alert("You can't escape.")
                                }}>
                                    <span role='img' aria-label='🔙'>🔙</span>
                                    Reject reality
                                </MenuListItem>
                            </MenuList>
                        )}
                    </div>
                </Toolbar>
            </AppBar>
            <Window className='window' style={{
                position: "absolute",
                left: "50%",
                top: "30%",
                webkitTransform: "translate(-50%, -50%)",
                transform: "translate(-50%, -50%)",
            }}>
                <WindowHeader active={false} className='window-title'><span>Garasfunny.exe</span>
                </WindowHeader>
                <WindowContent>
                    <img src={"../garasfunny.png"} alt={"Funny pic"} style={{width:"100%"}}/>
                </WindowContent>
            </Window>
            <Window className='window' style={{
                position: "absolute",
                left: "50%",
                top: "60%",
                webkitTransform: "translate(-50%, -50%)",
                transform: "translate(-50%, -50%)",
            }}>
                <WindowHeader active={false} className='window-title'><span>Garasauto_Real.exe</span>
                </WindowHeader>
                <WindowContent>
                    <Monitor><img src={"../garas.png"} alt={"The amazing garas"} style={{width:"100%"}}/></Monitor>
                </WindowContent>
            </Window>
        </div>
    );
}