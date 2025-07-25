import { useParams } from 'react-router-dom'
import { Box, Button, TextField } from '@mui/material'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import useMediaQuery from '@mui/material/useMediaQuery'
import Header from '../ui/global/Header.jsx'
import { useAuthContext } from '../../hooks/useAuthContext.jsx'

// import { Clients } from '../../../../schemas/clients'
// const clientSchema = { Clients }

const clientSchema = yup.object().shape({
    Clients: yup.array().of(
        yup.object().shape({
            Name: yup.string(),
            Status: yup.string(),
            ERPID: yup.number().integer(),
            ERPParentID: yup.number().integer(),
            ERPCode: yup.string().trim(),
            ERPSvcsCode: yup.string().trim(),
            ERPPostageCode: yup.string().trim(),
            Type: yup.string()
                .oneOf(['DirectClient',
                 'ChannelPartner',
                  'NonProfit',
                   'AdHoc']),
            Term: yup.string()
                .oneOf(['NET10',
                 'NET30',
                 'NET60',
                  'NET90']),
            PostageCost: yup.number(),
            PostagePrice: yup.number(),
            AllInOneInvoicing: yup.boolean(),
            ZeroSellHiding: yup.boolean(),
            BulkBillEnabled: yup.boolean()
        })
    )
});

const initialValues = {
    Name: null,
    Active: null,
    ERPID: null,
    ERPParentID: null,
    ERPCode: null,
    ERPSvcCode: null,
    ERPPostageCode: null,
    Type: null,
    Term: null,
    PostageCost: null,
    PostagePrice: null,
    AllInOneInvoicing: null,
    ZeroSellHiding: null,
    BulkBillEnabled: null,
}

const UpdateClientForm = () => {
    const isNonMobile = useMediaQuery('(min-width:600px)')
    const { user } = useAuthContext()
    let { clientid } = useParams()
    
    const postData = async(query)=>{
        let res = await fetch("http://localhost:5000/api/v1/clients/" + clientid, {
            method: "PATCH",
            headers: {
            Authorization: `Bearer ${user.token}`,
            'Content-Type': 'application/json',
        },
            body: query,
        })
            if (res.ok) {
                let data = await res.json()
                alert(res.status)
                console.log(data)
                //dispatch({type: 'SET_JOBS', payload: json})
            } else {
                alert(res.status)
            }
        }


    return (
        <Box m='20px'>
            <Header title='Update Client' subtitle='Update existing client.' />

            <Formik
                onSubmit={ async (values) => {
                    let query = JSON.stringify({ 
                        Clients: [ {...values} ] 
                    });
                    postData(query);
                }}
                initialValues={initialValues}
                validationSchema={clientSchema}
            >
                {({ values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <Box 
                            display='grid' 
                            gap='30px' 
                            gridTemplateColumns='repeat(4, minmax(0, 1fr))'
                            sx={{
                                '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' }
                            }}
                        >
                            <TextField 
                                fullWidth
                                variant='filled'
                                type='text'
                                label='Name'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.Name}
                                name='Name'
                               errors={!!touched.Name && !!errors.Name}
                                helpertext={touched.Name && errors.Name}
                                sx={{ gridColumn: 'span 2' }}
                            />
                            <TextField 
                                fullWidth
                                variant='filled'
                                type='text'
                                label='Status'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.Status}
                                name='Status'
                               errors={!!touched.Status && !!errors.Status}
                                helpertext={touched.Status && errors.Status}
                                sx={{ gridColumn: 'span 2' }}
                            />
                            <TextField 
                                fullWidth
                                variant='filled'
                                type='text'
                                label='ERPID'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.ERPID}
                                name='ERPID'
                               errors={!!touched.ERPID && !!errors.ERPID}
                                helpertext={touched.ERPID && errors.ERPID}
                                sx={{ gridColumn: 'span 4' }}
                            />
                            <TextField 
                                fullWidth
                                variant='filled'
                                type='text'
                                label='ERPParentID'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.ERPParentID}
                                name='ERPParentID'
                               errors={!!touched.ERPParentID && !!errors.ERPParentID}
                                helpertext={touched.ERPParentID && errors.ERPParentID}
                                sx={{ gridColumn: 'span 4' }}
                            />
                            <TextField 
                                fullWidth
                                variant='filled'
                                type='text'
                                label='ERPCode'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.ERPCode}
                                name='ERPCode'
                               errors={!!touched.ERPCode && !!errors.ERPCode}
                                helpertext={touched.ERPCode && errors.ERPCode}
                                sx={{ gridColumn: 'span 4' }}
                            />
                            <TextField 
                                fullWidth
                                variant='filled'
                                type='text'
                                label='ERPSvcsCode'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.ERPSvcsCode}
                                name='ERPSvcsCode'
                               errors={!!touched.ERPSvcsCode && !!errors.ERPSvcsCode}
                                helpertext={touched.ERPSvcsCode && errors.ERPSvcsCode}
                                sx={{ gridColumn: 'span 4' }}
                            />
                            <TextField 
                                fullWidth
                                variant='filled'
                                type='text'
                                label='ERPPosCode'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.ERPPosCode}
                                name='ERPPosCode'
                               errors={!!touched.ERPPosCode && !!errors.ERPPosCode}
                                helpertext={touched.ERPPosCode && errors.ERPPosCode}
                                sx={{ gridColumn: 'span 4' }}
                            />
                            <Field 
                                component='select'
                                id='type'
                                multiple={false}
                                fullWidth
                                variant='filled'
                                label='Type'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.Type}
                                name='Type'
                               errors={!!touched.Type && !!errors.Type}
                                helpertext={touched.Type && errors.Type}
                                sx={{ gridColumn: 'span 4' }}
                            >
                                <option value="" label='Type'>
                                    Select a client type{" "}
                                </option>
                                <option value='DirectClient' label='Direct Client'>
                                    {" "}
                                    Direct Cleint
                                </option>
                                <option value='ChannelPartner' label='Channel Partner'>
                                    {" "}
                                    Channel Partner
                                </option>
                                <option value='NonProfit' label='Non-Profit'>
                                    {" "}
                                    Non-Profit
                                </option>
                                <option value='AdHoc' label='Ad Hoc'>
                                    {" "}
                                    Ad Hoc
                                </option>
                            </Field>
                            <Field 
                                component='select'
                                id='term'
                                multiple={false}
                                fullWidth
                                variant='filled'
                                label='Term'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.Term}
                                name='Term'
                               errors={!!touched.Term && !!errors.Term}
                                helpertext={touched.Term && errors.Term}
                                sx={{ gridColumn: 'span 4' }}
                            >
                                <option value="" label='Term'>
                                    Select client terms{" "}
                                </option>
                                <option value='NET10' label='NET 10'>
                                    {" "}
                                    NET 10
                                </option>
                                <option value='NET30' label='NET 30'>
                                    {" "}
                                    NET 30
                                </option>
                                <option value='NET60' label='NET 60'>
                                    {" "}
                                    NET 60
                                </option>
                                <option value='NET90' label='NET 90'>
                                    {" "}
                                    NET 90
                                </option>
                            </Field>
                            <Field 
                                component='select'
                                id='taxable'
                                multiple={false}
                                fullWidth
                                variant='filled'
                                type='text'
                                label='Taxable'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.Taxable}
                                name='Taxable'
                               errors={!!touched.Taxable && !!errors.Taxable}
                                helpertext={touched.Taxable && errors.Taxable}
                                sx={{ gridColumn: 'span 2' }}
                            >
                                <option value="" label='Set Taxable Status'>
                                    Select Taxable status for the client{" "}
                                </option>
                                <option value={false} label='False'>
                                    False{" "}
                                </option>
                                <option value={true} label='True'>
                                    {" "}
                                    True
                                </option>
                            </Field>
                            <Field 
                                component='select'
                                id='taxexempt'
                                multiple={false}
                                fullWidth
                                variant='filled'
                                type='text'
                                label='TaxExempt'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.TaxExempt}
                                name='TaxExempt'
                               errors={!!touched.TaxExempt && !!errors.TaxExempt}
                                helpertext={touched.TaxExempt && errors.TaxExempt}
                                sx={{ gridColumn: 'span 2' }}
                            >
                                <option value="" label='Set TaxExempt Status'>
                                    Is client tax exempt?{" "}
                                </option>
                                <option value={false} label='False'>
                                    False{" "}
                                </option>
                                <option value={true} label='True'>
                                    {" "}
                                    True
                                </option>
                            </Field>
                            <TextField 
                                fullWidth
                                variant='filled'
                                type='decimal'
                                label='PostageCost'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.PostageCost}
                                name='PostageCost'
                               errors={!!touched.PostageCost && !!errors.PostageCost}
                                helpertext={touched.PostageCost && errors.PostageCost}
                                sx={{ gridColumn: 'span 2' }}
                            />
                            <TextField 
                                fullWidth
                                variant='filled'
                                type='decimal'
                                label='PostagePrice'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.PostagePrice}
                                name='PostagePrice'
                               errors={!!touched.PostagePrice && !!errors.PostagePrice}
                                helpertext={touched.PostagePrice && errors.PostagePrice}
                                sx={{ gridColumn: 'span 2' }}
                            />
                            <Field 
                                component='select'
                                id='aioinvoicing'
                                multiple={false}
                                fullWidth
                                variant='filled'
                                type='text'
                                label='AllInOneInvoicing'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.AllInOneInvoicing}
                                name='AllInOneInvoicing'
                               errors={!!touched.AllInOneInvoicing && !!errors.AllInOneInvoicing}
                                helpertext={touched.AllInOneInvoicing && errors.AllInOneInvoicing}
                                sx={{ gridColumn: 'span 2' }}
                            >
                                <option value="" label='Set All In One Invoicing'>
                                    Combine postage and services on one invoice?{" "}
                                </option>
                                <option value={false} label='False'>
                                    False{" "}
                                </option>
                                <option value={true} label='True'>
                                    {" "}
                                    True
                                </option>
                            </Field>
                            <Field 
                                component='select'
                                id='zerosellhiding'
                                multiple={false}
                                fullWidth
                                variant='filled'
                                type='text'
                                label='ZeroSellHiding'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.ZeroSellHiding}
                                name='ZeroSellHiding'
                               errors={!!touched.ZeroSellHiding && !!errors.ZeroSellHiding}
                                helpertext={touched.ZeroSellHiding && errors.ZeroSellHiding}
                                sx={{ gridColumn: 'span 2' }}
                            >
                                <option value="" label='Set Zero Sell Hiding'>
                                    Hide cost only items from invoices?{" "}
                                </option>
                                <option value={false} label='False'>
                                    False{" "}
                                </option>
                                <option value={true} label='True'>
                                    {" "}
                                    True
                                </option>
                            </Field>
                            <Field 
                                component='select'
                                id='bulkbillenabled'
                                multiple={false}
                                fullWidth
                                variant='filled'
                                type='text'
                                label='BulkBillEnabled'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.BulkBillEnabled}
                                name='BulkBillEnabled'
                               errors={!!touched.BulkBillEnabled && !!errors.BulkBillEnabled}
                                helpertext={touched.BulkBillEnabled && errors.BulkBillEnabled}
                                sx={{ gridColumn: 'span 2' }}
                            >
                                <option value="" label='Set Bulk Billing'>
                                    Enabled Bulk Billing for client invoices?{" "}
                                </option>
                                <option value={false} label='False'>
                                    False{" "}
                                </option>
                                <option value={true} label='True'>
                                    {" "}
                                    True
                                </option>
                            </Field>
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained" disabled={isSubmitting} >
                                Update Client
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}

export default UpdateClientForm;