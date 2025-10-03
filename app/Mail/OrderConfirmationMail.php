<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Models\Order;

class OrderConfirmationMail extends Mailable
{
    use Queueable, SerializesModels;

    public $order;
    public $type;

    public function __construct(Order $order, $type = 'confirmed')
    {
        $this->order = $order;
        $this->type = $type;
    }

    public function build()
    {
        $subject = $this->type === 'confirmed' ? 'Confirmation de commande' : 'Commande annulée';
        return $this->subject($subject)
            ->view('emails.order_confirmation');
    }
}
