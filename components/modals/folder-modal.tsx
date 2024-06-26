'use client'
import { useFolder } from '@/hooks/use-folder'
import { db } from '@/lib/firebase'
import { formSchema } from '@/lib/validation'
import { useUser } from '@clerk/nextjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

const FolderModal = () => {
	const { isOpen, onClose } = useFolder()
	const { user } = useUser()
	const router = useRouter()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
		},
	})

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		const promise = addDoc(collection(db, 'folders'), {
			name: values.name,
			timestamp: serverTimestamp(),
			uid: user?.id,
			isArchive: false,
			isDocument: false,
		}).then(() => {
			form.reset()
			onClose()
			router.refresh()
		})

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Folder created',
			error: 'Error creating folder',
		})
	}

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className='max-w-sm'>
				<DialogHeader>
					<DialogTitle>New folder</DialogTitle>
				</DialogHeader>

				<div className='flex flex-col space-y-2'>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
							<FormField
								control={form.control}
								name='name'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												placeholder='Folder name'
												className='rounded-none outline-none'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<div className='flex justify-end items-center space-x-2'>
								<Button
									variant={'link'}
									size={'sm'}
									onClick={onClose}
									type='button'
								>
									Cancel
								</Button>
								<Button variant={'outline'} size={'sm'} type='submit'>
									Create
								</Button>
							</div>
						</form>
					</Form>
				</div>
			</DialogContent>
		</Dialog>
	)
}

export default FolderModal
