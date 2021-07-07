<?php

namespace App\Http\Controllers\ApiAdmin;

use App\Models\Icon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;

class IconController extends Controller
{
    /**
     * Get All Icons
     * @param $paginate
     * @return mixed
     */
    public function index($paginate)
    {
        $icons = Icon::query()->latest()->paginate($paginate);

        $data = [
            'icons' => $icons,
            'status' => 'ok'
        ];
        return response()->json($data, 200);
    }

    /**
     * Create a new Icon
     * @param Request $request
     * @return mixed
     */
    public function create(Request $request)
    {

        $request->validate([
            'name' => ['required', 'string', 'max:100'],
        ]);
        $dataSVG = [
            'name' => $request->get('name'),
            'file' => $request->get('iconFile'),
        ];
        if (is_null($dataSVG['file'])) {
            $error = [
                'errors' => ['file' => [0 => 'Die Datei muss ein SVG sein!']],
            ];
            return response()->json($error, 400);
        }

        $path = $this->generateIcon($dataSVG);
        if ($path === 'error') {
            $error = [
                'errors' => ['file' => [0 => 'Die Datei muss ein SVG sein!']],
            ];
            return response()->json($error, 400);
        } else {
            $icon = new Icon();
            $icon->name = $dataSVG['name'];
            $icon->path = $path;
            $icon->save();
            $data = [
                'infoMsg' => 'Icon Erstellt',
                'status' => 'ok'
            ];
            return response()->json($data, 200);
        }

    }

    private function generateIcon($data)
    {
        $exploded = explode(',', $data['file']);
        $decoded = base64_decode($exploded[1]);
        if (Str::contains($exploded[0], 'svg')) {
            $extension = 'svg';
        } else {
            return 'error';
        }
        $fileName = Str::random(10) . '_' . str_replace(' ', '_', $data['name']) . '-' . Str::random() . '.' . $extension;
        $path = public_path('images/icons/') . $fileName;
        file_put_contents($path, $decoded);
        return $imageFolder = "images/icons/" . $fileName;
    }

    /**
     * Update Icon
     * @param Request $request
     * @return mixed
     */
    public function update(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:100'],
        ]);
        $dataSVG = [
            'id' => $request->get('id'),
            'name' => $request->get('name'),
            'file' => $request->get('iconFile'),
        ];
        $icon = Icon::find($dataSVG['id']);
        $path = $icon->path;
        if (!is_null($dataSVG['file'])) {
            $path = $this->generateIcon($dataSVG);
        }
        if ($path === 'error') {
            $error = [
                'errors' => ['file' => [0 => 'Die Datei muss ein SVG sein!']],
            ];
            return response()->json($error, 400);
        } else {
            $icon->name = $dataSVG['name'];
            $icon->path = $path;
            $icon->save();
            $data = [
                'infoMsg' => 'Icon aktualisiert',
                'status' => 'ok'
            ];
            return response()->json($data, 200);
        }
    }

    /**
     * Delete Icon
     * @param Request $request
     * @return mixed
     */
    public function destroy(Request $request)
    {
        $icon = Icon::find($request->get('id'));
        $icon->delete();
        $data = [
            'infoMsg' => 'Icon gelöscht',
            'status' => 'ok'
        ];
        return response()->json($data, 200);
    }

}
