import Input from "./Input"
import Button from "./Button"
import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'

interface ContactFormProps {
    id?: string[]
}

function ContactForm(props: ContactFormProps) {
    const { register, handleSubmit } = useForm({})

    const onSubmit = (data: any, event: any) => {
        // Update item
        if(props.id && props.id.length>0) {
            server_calls.update(props.id[0], data)
            setTimeout(() => window.location.reload(), 1000)
            event.target.reset()
        }
        // Add new item
        else {
            server_calls.create(data)
            setTimeout(()=> window.location.reload(), 1000)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <Input {...register('name')} name='name' placeholder='Name' type="text"/>
                </div>
                <div>
                    <label htmlFor="caffeine_per_oz">Caffeine (in mg) per oz</label>
                    <Input {...register('caffeine_per_oz', { valueAsNumber: true })} name='caffeine_per_oz' placeholder='Caffeine (in mg) per oz' type="number"/>
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    <Input {...register('color')} name='color' placeholder='Color' type="text"/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name='description' placeholder='Description' type="text"/>
                </div>
                <div>
                    <label htmlFor="image_url">Image URL</label>
                    <Input {...register('image_url')} name='image_url' placeholder='Image URL' type="text"/>
                </div>
                <div className="flex p-1">
                    <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
  )
}

export default ContactForm
