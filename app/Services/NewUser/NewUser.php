<?php


namespace App\Services\NewUser;


use App\Models\Account;
use App\Models\Category;
use App\Models\Package;
use App\Models\Subscription;
use Carbon\Carbon;

class NewUser
{
    /**
     * Generate SignUp User Default Account
     * @param $user_id
     * @param $name
     */
    public function createDefaultAccount($user_id, $name)
    {
        $account = new Account();
        $account->name = $name;
        $account->description = 'Keine Beschreibung!';
        $account->color = 'blue';
        $account->user_id = $user_id;
        $account->save();

        $this->createDefaultCategories($account->id);
    }

    /**
     * Generate SignUP User Defaults Categories
     * @param $account_id
     */
    public function createDefaultCategories($account_id)
    {
        $Default = [
            'Wallet' => 1,
            'Bank' => 2,
            'Hobby' => 3,
        ];

        foreach ($Default as $name => $icon) {
            $category = new Category();
            $category->name = $name;
            $category->description = 'Keine Beschreibung!';
            $category->color = 'black';
            $category->icon_id = $icon;
            $category->account_id = $account_id;
            $category->save();

        }
    }

    public function freeSubscription($user){
        //Free Subscription Package 2
        $package = Package::find(2);
        $expireDate = Carbon::now()->addMonths($package->run_time)->format('Y-m-d');
        $subscription = new Subscription();
        $subscription->user_id = $user->id;
        $subscription->package_id = $package->id;
        $subscription->expire = $expireDate;
        $subscription->run_time = $package->run_time;
        $subscription->save();
    }
}
