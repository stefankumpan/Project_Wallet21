<?php
namespace App\Notifications;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
class PasswordResetSuccess extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     *
    @return void
     */
    public function __construct()
    {
        //
    }
    /**
     * Get the notification's delivery channels.
     *
     *
    @param  mixed  $notifiable
     *
    @return array
     */
    public function via($notifiable)
    {

        return ['mail'];    }
    /**
     * Get the mail representation of the notification.
     *
     *
    @param  mixed  $notifiable
     *
    @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {

        return (new MailMessage)
            ->line('Sie haben Ihr Passwort erfolgreich geändert.')
            ->line('Wenn Sie das Passwort geändert haben, ist keine weitere Aktion erforderlich.')
            ->line('Wenn Sie das Passwort nicht geändert haben, schützen Sie Ihr Konto.');
    }
    /**
     * Get the array representation of the notification.
     *
     *
    @param  mixed  $notifiable
     *
    @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
