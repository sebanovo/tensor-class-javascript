import Swal from 'sweetalert2'

export async function promptSwal(title) {
  return await Swal.fire({
    title,
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar',
    showLoaderOnConfirm: true,
    allowOutsideClick: () => !Swal.isLoading()
  })
}

export async function confirDelete() {
  return await Swal.fire({
    title: 'Estas seguró?',
    text: 'No podras revertir esto!',
    icon: 'warning',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, reinicia!'
  })
}

export function messageSwal(title) {
  Swal.fire({
    title,
    showClass: {
      popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
    },
    hideClass: {
      popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
    }
  })
}

export function check({ title, text, icon }) {
  Swal.fire({
    title,
    text,
    icon
  })
}
