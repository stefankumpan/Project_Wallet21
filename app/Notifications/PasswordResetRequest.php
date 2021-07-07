<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class PasswordResetRequest extends Notification implements ShouldQueue
{
    use Queueable;
    protected $token;

    /**
     * Create a new notification instance.
     *
     *
     * @return void
     */
    public function __construct($token)
    {

        $this->token = $token;
    }

    /**
     * Get the notification's delivery channels.
     *
     *
     * @param  mixed $notifiable
     *
     * @return array
     */
    public function via($notifiable)
    {

        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     *
     * @param  mixed $notifiable
     *
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {

        $url = url('/reset-password/' . $this->token);
        return (new MailMessage)
            ->line('Sie erhalten diese E-Mail, weil wir eine Aufforderung zum Zurücksetzen des Passworts für Ihr Konto erhalten haben.')
            ->action('Reset Passwort', url($url))
            ->line('Wenn Sie kein Zurücksetzen des Kennworts angefordert haben, ist keine weitere Aktion erforderlich');
    }

    /**
     * Get the array representation of the notification.
     *
     *
     * @param  mixed $notifiable
     *
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
