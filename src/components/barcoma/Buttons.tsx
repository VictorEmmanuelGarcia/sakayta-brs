import { Stack, Button, Container, Box, colors } from "@mui/material";

function Buttons() {
    return(
            <div className="Buttons">
                <Container fixed maxWidth="md">
                    <Stack direction="row" spacing={0} alignItems="center" justifyContent={"center"} height="20vh">
                        <Button id="display-payment" 
                            variant="text" sx={{display: 'flex', opacity: '0.9', backgroundColor:'#white', fontColor: '#F79110', fontWeight:"600", cursor: 'pointer'}}
                            href="/payment/readpayment"  
                            >
                                Display Payment
                        </Button>
                        <Button id="update-payment" 
                            variant="text" 
                            size="medium" 
                            sx={{display: 'flex', opacity: '0.9', backgroundColor:'#white', fontWeight:"600", cursor: 'pointer'}}
                            href="/payment/updatepayment"
                            >
                                Update Payments
                        </Button>
                        <Button id="delete-payment" 
                            variant="text" 
                            size="medium" 
                            sx={{display: 'flex', opacity: '0.9', backgroundColor:'#white', fontWeight:"600", cursor: 'pointer'}}
                            href="/payment/deletepayment"
                            >
                                Delete Payments
                        </Button>
                    </Stack> 
                </Container>                
            </div>
    )
}
export default Buttons;

function setState(arg0: { view: number; }): void {
    throw new Error("Function not implemented.");
}
