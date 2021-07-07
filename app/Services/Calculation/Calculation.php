<?php


namespace App\Services\Calculation;


use App\Models\Account;

class Calculation
{

    /**
     * @param $accounts
     * Calculation for Dashboard Accounts
     */
    public function dashboardAccounts($accounts){
        foreach ($accounts as $account) {
           $this->accountCalculation($account);
           $this->categoriesCalculation($account->categories);
        }
        return $accounts;
    }

    /**
     * @param $accounts
     * Calculation for Multi Accounts
     */
    public function accountsCalculation($accounts)
    {
        foreach ($accounts as $account) {
            $account['revenue'] = $account->bookingRecords->sum('revenue');
            $account['expenditure'] = $account->bookingRecords->sum('expenditure');
            $account['total'] = $account['revenue'] - $account['expenditure'];
            unset($account['bookingRecords'],$account->user_id);
        }
        return $accounts;
    }

    /**
     * @param $account
     * Calculation for one Account
     */
    public function accountCalculation($account)
    {
        $account['revenue'] = $account->bookingRecords->sum('revenue');
        $account['expenditure'] = $account->bookingRecords->sum('expenditure');
        $account['total'] = $account['revenue'] - $account['expenditure'];
        unset($account['bookingRecords'],$account->user_id);
        return $account;
    }

  /**
   *Calculation for Categories (Multi)
   */
    public function categoriesCalculation($categories)
    {
        foreach ($categories as $category){
            $category['revenue'] = $category->bookingRecords->sum('revenue');
            $category['expenditure'] = $category->bookingRecords->sum('expenditure');
            $category['total'] = $category['revenue'] - $category['expenditure'];
           unset($category['bookingRecords']);
        }
        return $categories;

    }

    /**
     * @param $category
     * Calculation for one Category
     */
    public function categoryCalculation($category)
    {
        $category['revenue'] = $category->bookingRecords->sum('revenue');
        $category['expenditure'] = $category->bookingRecords->sum('expenditure');
        $category['total'] = $category['revenue'] - $category['expenditure'];
       unset($category['bookingRecords']);
        return $category;
    }

    public function currencyConversion($data){
        $currencies = $data['currencies'];
        $currencyValue = $currencies[$data['currency']];
        $accountID = $data['id'];
        $bookingRecords = Account::find($accountID)->bookingRecords()->get();
        foreach ($bookingRecords as $bk){
            $total =  str_replace('-','',($bk->revenue * $currencyValue -  $bk->expenditure * $currencyValue));
            $bk->revenue = $bk->revenue * $currencyValue;
            $bk->expenditure = $bk->expenditure * $currencyValue;
            $bk->tax_amount = ($total/100)* $bk->tax;
            $bk->save();
        }
        return 'currencyConversion: Finished';
    }


}
